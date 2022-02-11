from django.urls import path, include

from meetings.api.urls import system_admin
from meetings.api.views import views

urlpatterns = (
    path('maintain-live-meeting/<uuid:userId>/<uuid:meetingNumber>/', views.MaintainLiveMeetingView.as_view(), name='maintain_live_meetings'),
    path('system-admin/', include(system_admin)),
)