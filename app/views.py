from django.shortcuts import render
from rest_framework.parsers import JSONParser
from rest_framework.response import Response 
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from . models import Post
from . serializers import PostSerializer
from django.shortcuts import get_object_or_404

class PostView(APIView):
    def get(self, request, format=None):
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)

    def post(self, request):
        data = JSONParser().parse(request)
        serializer = PostSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
        return Response(serializer.data)

class PostDetailView(APIView):
    def get(self, request, post_id):
        post = Post.objects.get(id=post_id)
        serializer = PostSerializer(post)
        return Response(serializer.data)

    def put(self, request, post_id):
        # post = self.get_object()
        data = request.data
        post = Post.objects.get(id=post_id)
        post.title = data["title"]
        post.content = data["content"]
        post.save()
        serializer = PostSerializer(post)
        return Response(serializer.data)
    
class PostDelete(APIView):
    def post(self, request, post_id):
        post = get_object_or_404(Post, id=post_id)
        post.delete()
        return Response()
