from django.urls import path

from meetings.api.views import system_admin

urlpatterns = (
    path('maintain-meetings/<uuid:userId>/', system_admin.MaintainMeetingsView.as_view(), name='maintain_meetings'),
)