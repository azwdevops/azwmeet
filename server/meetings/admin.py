from django.contrib.admin import register, ModelAdmin

from meetings.models import Meeting, MeetingToken


@register(Meeting)
class MeetingAdmin(ModelAdmin):
    list_display = ('meeting_number',)

@register(MeetingToken)
class MeetingTokenAdmin(ModelAdmin):
    list_display=('token_value',)

