# Generated by Django 3.2.12 on 2022-02-11 09:09

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('meetings', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='meeting',
            name='meeting_number',
            field=models.UUIDField(default=uuid.uuid4, editable=False, unique=True),
        ),
    ]