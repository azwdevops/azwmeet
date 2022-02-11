from django.utils.timezone import now, timedelta

from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from core.views import verify_user, invalid_user, invalid_serializer
from meetings.api.serializers.system_admin import MeetingSerializer, MeetingViewSerializer
from meetings.models import Meeting

class MaintainMeetingsView(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request, **kwargs):
        user=verify_user(request, kwargs['userId'])
        if not user:
            return invalid_user()
        data=request.data
        serializer=MeetingSerializer(data=data)

        if not serializer.is_valid():
            return invalid_serializer()
        meeting=serializer.save()
        meeting.created_by=user
        meeting.save()

        new_meeting_data=MeetingViewSerializer(meeting).data

        return Response({'detail':'Meeting created successfully', 'new_meeting_data':new_meeting_data}, status=201)

    def get(self, request, **kwargs):
        user=verify_user(request, kwargs['userId'])
        if not user:
            return invalid_user()
        all_meetings=Meeting.objects.filter(start_time__gte=now() - timedelta(hours=2))
        meetings_data=MeetingViewSerializer(all_meetings, many=True).data

        return Response({'detail':'success', 'meetings_data':meetings_data}, status=200)
