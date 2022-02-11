import os
import jwt

from django.utils.timezone import now, timedelta
from django.conf import settings

from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from decouple import config

from core.views import verify_user, invalid_user, get_object_or_none
from meetings.models import Meeting, MeetingToken

from meetings.api.serializers.serializers import MeetingDetailsSerializer


if settings.PRODUCTION:
    token_generation_key=os.environ['APP_SECRET']
    aud=os.environ['APP_ID']
    iss=os.environ['APP_ID']
else:
    token_generation_key=config('APP_SECRET')
    aud=config('APP_ID')
    iss=config('APP_ID')


class MaintainLiveMeetingView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, **kwargs):
        user=verify_user(request, kwargs['userId'])

        if not user:
            return invalid_user()
        meeting = get_object_or_none(Meeting)

        if not meeting:
            return Response({'detail':'Invalid meeting specified'}, status=400)

        # delete all expired tokens
        expired_tokens=MeetingToken.objects.filter(meeting=meeting, expiration_date__lt=now())
        if len(expired_tokens) > 0:
            expired_tokens.delete()

        # we get the valid tokens
        tokens=MeetingToken.objects.filter(meeting=meeting, expiration_date__gte=now()).order_by('created_at')
        
        if len(tokens) > 0:
            # we get the most recent token
            current_token=tokens[0]
            meeting_details=MeetingDetailsSerializer(current_token).data
            return Response({'detail':'success','meeting_details':meeting_details}, status=200)
        else:
            # check if meeting is created by user, so that we can generate tokens
            if meeting.created_by == user:
                # we created a new token
                token_kwargs = {
                    'aud':aud,
                    'iss':iss,
                    'sub':'meeting.azwgroup.com',
                    'room':str(meeting.meeting_number) # we convert uuid to str to make it JSON serializable
                }
                token_value=self.generate_token(**token_kwargs)
                meeting_token=MeetingToken.objects.create(
                    meeting=meeting,
                    user=user,
                    token_value=token_value,
                    expiration_date=now() + timedelta(hours=5)
                )
                meeting_details=MeetingDetailsSerializer(meeting_token).data
                return Response({'detail':'success','meeting_details':meeting_details}, status=200)
            else:
                return Response({'detail':'This meeting has not started yet'}, status=400)
            
    # method to generate a new token
    def generate_token(self, **kwargs):
        payload = {
        **kwargs,
        "exp":now() + timedelta(hours=5)
        }
        encoded_token = jwt.encode(payload, token_generation_key, algorithm="HS256")
        return encoded_token