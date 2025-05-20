from django.shortcuts import render
from . import models

def from_my_bd(request):
    context = {
        'data': models.Article.objects.all()  # Получаем все статьи из базы
    }
    return render(request, 'article/page_for_bd.html', context)  # Передаём данные в шаблон
