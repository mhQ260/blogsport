from django.urls import path
from . views import PostView, PostDetailView, PostDelete

urlpatterns = [
    path('posts/', PostView.as_view(), name='posts_view'),
    path('post/add', PostView.as_view(), name='add_post_view'),
    path('post/<int:post_id>/', PostDetailView.as_view(), name='get_post_view'),
    path('post/delete/<int:post_id>/', PostDelete.as_view(), name='delete_post'),
    path('post/update/<int:post_id>/', PostDetailView.as_view(), name='update_post_view'),
]