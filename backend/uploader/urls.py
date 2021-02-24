from django.urls import include, path
from rest_framework import routers
from .views import ImagesViewSet

router = routers.DefaultRouter()
router.register(r'images', ImagesViewSet)

urlpatterns = [
    path('', include(router.urls)),
]