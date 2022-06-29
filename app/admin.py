from django.contrib import admin
from . models import Post, Comment
#Dodanie Post model i Comment model do wbudowanego admin page
admin.site.register(Post) 
admin.site.register(Comment)