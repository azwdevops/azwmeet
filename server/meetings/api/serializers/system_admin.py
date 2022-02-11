from django.utils.timezone import now, timedelta

from rest_framework.serializers import ModelSerializer

from meetings.models import Meeting

class MeetingSerializer(ModelSerializer):
    class Meta:
        model=Meeting
        fields=('start_time', 'duration')

class MeetingViewSerializer(ModelSerializer):
    class Meta:
        model=Meeting
        fields=('meeting_number', 'start_time','duration')

    def to_representation(self, meeting):
        data=super().to_representation(meeting)
        data['status'] = 'start now' if meeting.start_time <= now() else 'not started'

        return data