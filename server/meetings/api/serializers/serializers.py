from rest_framework.serializers import ModelSerializer

from meetings.models import MeetingToken

class MeetingDetailsSerializer(ModelSerializer):
    class Meta:
        model=MeetingToken
        fields=('token_value',)

    def to_representation(self, meeting_token):
        data = super().to_representation(meeting_token)
        data['meeting_number']=meeting_token.meeting.meeting_number

        return data