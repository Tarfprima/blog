from django.urls import path
from . import views

urlpatterns = [
    path('detail/', views.article, name='article_detail'),
    path('arlist/', views.from_my_bd, name='article_list'),
    path('article/', views.article, name='article'),
    path('blogpost/', views.get_my_blog_posts, name='from_bd')
    
]