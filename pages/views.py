from django.shortcuts import render

# Главная страница
def home(request):
    return render(request, 'home.html')

# Новости
def news(request):
    return render(request, 'news.html')

# Руководство
def management(request):
    return render(request, 'management.html')

# Факты
def facts(request):
    return render(request, 'facts.html')

# Контакты
def contacts(request):
    return render(request, 'contacts.html')

# История
def history(request):
    return render(request, 'history.html')

# Известные люди
def history_people(request):
    return render(request, 'history_people.html')

# Фотографии
def history_photos(request):
    return render(request, 'history_photos.html')