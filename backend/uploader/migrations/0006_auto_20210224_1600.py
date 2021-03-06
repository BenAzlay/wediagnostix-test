# Generated by Django 3.1.7 on 2021-02-24 15:00

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('uploader', '0005_auto_20210224_1234'),
    ]

    operations = [
        migrations.AlterField(
            model_name='image',
            name='date_db',
            field=models.DateTimeField(default=datetime.datetime(2021, 2, 24, 15, 0, 21, 648027, tzinfo=utc)),
        ),
        migrations.AlterField(
            model_name='image',
            name='date_taken',
            field=models.DateTimeField(default=datetime.datetime(2021, 2, 24, 15, 0, 21, 648027, tzinfo=utc)),
        ),
        migrations.AlterField(
            model_name='image',
            name='title',
            field=models.CharField(default='', max_length=200),
        ),
    ]
