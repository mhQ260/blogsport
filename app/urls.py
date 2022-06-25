from django.urls import path
from . views import PostView

urlpatterns = [
    path('posts/', PostView.as_view(), name='posts_view'),
    path('post/add', PostView.as_view(), name='add_post_view')
]