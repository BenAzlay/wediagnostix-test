import datetime

from django.db import models
from django.utils import timezone

class Image(models.Model):
    title = models.CharField(max_length=200, default='')
    image_file = models.ImageField(upload_to='images/')
    date_taken = models.DateTimeField(default=timezone.now()) # Time at which upload button is clicked
    date_db = models.DateTimeField(default=timezone.now())

    def __str__(self):
        return self.title



