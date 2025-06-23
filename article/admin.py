from django.contrib import admin

from . import models

# models.НашКласс
@admin.register(models.Article)
class ArticleAdmin(admin.ModelAdmin):
    list_display = ['dt', 'title']

@admin.register(models.Subscription)
class SubscriptionAdmin(admin.ModelAdmin):
    list_display = ['subscriber', 'subscribed_to']

