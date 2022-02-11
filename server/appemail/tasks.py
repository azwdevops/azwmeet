# this file should be contained inside every app that has tasks defined
from __future__ import absolute_import, unicode_literals

from celery.utils.log import get_task_logger

# replace all azwmeet, matching case to the project name
from azwmeet.celery import app
from appemail.views import SendTokenEmail


logger = get_task_logger(__name__)

# task to send user activation email upon registration


@app.task(name='send_azwmeet_user_activation_email_task', bind=True, max_retries=3)
def send_azwmeet_user_activation_email_task(*args,**user_kwargs):
    logger.info(f"sent user activation email for {user_kwargs['email']}")
    return SendTokenEmail.send_user_activation_email(**user_kwargs)

# task to send password reset email


@app.task(name='send_azwmeet_password_reset_email_task', bind=True, max_retries=3)
def send_azwmeet_password_reset_email_task(*args,**user_kwargs):
    logger.info(f"sent user password reset email for {user_kwargs['email']}")
    return SendTokenEmail.send_password_reset_email(**user_kwargs)
