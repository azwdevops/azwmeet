# Generated by Django 3.2.12 on 2022-02-11 08:12

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Meeting',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('meeting_number', models.UUIDField(default=uuid.uuid4, editable=False)),
                ('duration', models.PositiveSmallIntegerField()),
                ('start_time', models.DateTimeField(blank=True, null=True)),
                ('is_active', models.BooleanField(default=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('created_by', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='user_created_meetings', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='MeetingToken',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('token_value', models.CharField(max_length=1000, unique=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('expiration_date', models.DateTimeField(blank=True, null=True)),
                ('is_expired', models.BooleanField(default=False)),
                ('meeting', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='meeting_tokens', to='meetings.meeting')),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='user_created_meeting_tokens', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
