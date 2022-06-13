from django.db import models

#Definiujemy modele dla naszej DB
class Post (models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    image = models.ImageField()
    public_date = models.DateTimeField('date published')

    def __str__(self):
        return self.title

# class Comment (models.Model):

#     content = models.TextField()
#     public_date = models.DateTimeField('date published')