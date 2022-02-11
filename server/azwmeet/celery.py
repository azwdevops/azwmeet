from __future__ import absolute_import, unicode_literals

import os

from celery import Celery
from kombu import Queue, Exchange

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'azwmeet.settings')

# remember to change db_number in localhost:6379/db_number to avoid queing conflicts, use a number that is not allocated yet
BASE_REDIS_URL = os.environ.get('REDIS_URL', 'redis://localhost:6379')


app = Celery('azwmeet')

app.config_from_object('django.conf:settings', namespace='CELERY')

app.autodiscover_tasks()

app.conf.broker_url = BASE_REDIS_URL

# configure task queues
app.conf.task_queues = (
    # Queue('queue_name', Exchange('queue_name'), routing_key='queue_name')
    # refer to https://docs.celeryproject.org/en/stable/userguide/routing.html
    Queue('azwmeet', Exchange('azwmeet', type='direct'),
          routing_key='azwmeet'),
)


# celery -A azwmeet worker -l info -Q azwmeet                 ==== START CELERY IN LINUX
# celery -A azwmeet worker -l info --pool=solo -Q azwmeet      ==== START CELERY IN WINDOWS
