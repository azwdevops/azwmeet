from uuid import uuid4

from django.db.models import ForeignKey, Model, UUIDField, DateTimeField, BooleanField, PROTECT, CASCADE, CharField, PositiveSmallIntegerField

from user.models import User

class Meeting(Model):
    id = UUIDField(primary_key=True, default=uuid4, editable=False)
    meeting_number=UUIDField(default=uuid4, editable=False, unique=True)
    duration=PositiveSmallIntegerField()
    start_time=DateTimeField(blank=True, null=True)
    is_active=BooleanField(default=True)
    created_by=ForeignKey(User, on_delete=PROTECT, null=True, blank=True, related_name='user_created_meetings')
    created_at=DateTimeField(auto_now_add=True)


    def __str__(self):
        return f'{self.meeting_number}'

# model for meeting tokens
class MeetingToken(Model):
    id = UUIDField(primary_key=True, default=uuid4, editable=False)
    meeting=ForeignKey(Meeting, on_delete=PROTECT, null=True, blank=True, related_name='meeting_tokens')
    user=ForeignKey(User,on_delete=CASCADE, null=True, blank=True, related_name='user_created_meeting_tokens')
    token_value=CharField(max_length=1000, unique=True)
    created_at=DateTimeField(auto_now_add=True)
    expiration_date=DateTimeField(null=True, blank=True)
    is_expired=BooleanField(default=False)


    def __str__(self):
        return f'{self.meeting.meeting_number}'
