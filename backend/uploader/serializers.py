from rest_framework import serializers
from django.utils import timezone
from .models import Image


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = '__all__'
    
    def create(self, validated_data):
        image = Image.objects.create(**validated_data)
        image.date_db = timezone.now()
        return image