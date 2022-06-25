from django.shortcuts import render
from rest_framework.parsers import JSONParser
from rest_framework.response import Response 
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from . models import Post
from . serializers import PostSerializer

class PostView(APIView):
    def get(self, request, format=None):
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)

    def post(self, request):
        data = JSONParser().parse(request)
        serializer = PostSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)
