from django.db import models

#Zdefniowanie modeli dla DB
class Post (models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    public_date = models.DateTimeField(auto_now_add=True, blank=True)

    class Meta:
        ordering = ('-public_date',)

    def __str__(self):
        return self.title

class Comment (models.Model):

    content = models.TextField()
    public_date = models.DateTimeField(auto_now_add=True, blank=True)