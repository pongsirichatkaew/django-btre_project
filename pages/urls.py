from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),  # rootpath (homepage)
    path('about', views.about, name='about')
]
