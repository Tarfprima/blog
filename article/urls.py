from django.urls import path
from . import views

urlpatterns = [
    # path('detail/', views.article, name='article_detail'),
    path('', views.from_my_bd, name='article_list'),
]