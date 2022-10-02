from django.urls import path
from . import views

urlpatterns = [
    
    path("", views.gpaPage, name='GPA'),
]