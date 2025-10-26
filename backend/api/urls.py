from django.urls import path,include
from .import views
from rest_framework import routers
from api.views import CompanyViewSet

router = routers.DefaultRouter()
router.register(r'companies', CompanyViewSet)
urlpatterns = [
    path('index/',views.index,name='index'),
    path('', include(router.urls)),
]
