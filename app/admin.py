from django.contrib import admin
from . models import Post, Comment

admin.site.register(Post) #Dodanie modelu Post do admin page
admin.site.register(Comment)