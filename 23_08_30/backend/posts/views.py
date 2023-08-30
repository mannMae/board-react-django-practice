from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import NotFound

from .models import Post
from .seiralizers import PostsSerializer, PostDetailSerializer

# Create your views here.

class Posts(APIView):
    def get(self, request):
        posts = Post.objects.all()
        serializer = PostsSerializer(posts, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = PostDetailSerializer(data=request.data)
        if serializer.is_valid():
            title = request.data.get("title")
            content = request.data.get("content")
            serializer.save(title=title, content=content)
            return Response(serializer.data)
        else:
            return Response(serializer.errors)

class PostDetail(APIView):
    def get_object(self, pk):
        try:
            return Post.objects.get(pk=pk)
        except Post.DoesNotExist:
            raise NotFound
    
    def get(self, request, pk):
        post = self.get_object(pk)
        serializer = PostDetailSerializer(post)
        return Response(serializer.data)
    
    def put(self, request, pk):
        post = self.get_object(pk)
        serializer = PostDetailSerializer(post, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)
    
    def delete(self, request, pk):
        post = self.get_object(pk)
        post.delete()
        return Response("deleted")