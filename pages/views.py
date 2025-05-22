from django.shortcuts import render

# Главная страница
def home(request):
    return render(request, 'pages/home.html')

# Новости
def news(request):
    return render(request, 'pages/news.html')

# Руководство
def management(request):
    return render(request, 'pages/management.html')

# Факты
def facts(request):
    return render(request, 'pages/facts.html')

# Контакты
def contacts(request):
    return render(request, 'pages/contacts.html')

# История
def history(request):
    return render(request, 'pages/history.html')

# Известные люди
def history_people(request):
    return render(request, 'pages/history_people.html')

# Фотографии
def history_photos(request):
    return render(request, 'pages/history_photos.html')