from django.urls import path
from . views import PostView, PostDetailView

urlpatterns = [
    path('posts/', PostView.as_view(), name='posts_view'),
    path('post/add', PostView.as_view(), name='add_post_view'),
    path('post/<int:post_id>/', PostDetailView.as_view(), name='get_post_view'),
]