from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .serializers import AppVideoSerializer, MusicSerializer, PokemonSerializer, UserSerializer,SnippetSerializer
from django.contrib.auth.models import User
# function base rest view
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
# models
from .models import AppVideo, Music, Snippet,Pokemon

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


@api_view(['GET', 'POST'])
def snippet_list(request):
    """
    List all code snippets, or create a new snippet.
    """
    if request.method == 'GET':
        snippets = Snippet.objects.all()
        serializer = SnippetSerializer(snippets, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = SnippetSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def snippet_detail(request, pk):
    """
    Retrieve, update or delete a code snippet.
    """
    try:
        snippet = Snippet.objects.get(pk=pk)
    except Snippet.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = SnippetSerializer(snippet)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = SnippetSerializer(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



# pokemon api

@api_view(['GET'])
def getAllPokemon(request):

    if request.method == 'GET':
        allPokemon = Pokemon.objects.all()
        data = PokemonSerializer(allPokemon,many=True).data
        return Response(data)

@api_view(['GET'])
def getPokemon(request,name):
    try:
        pokemon = Pokemon.objects.get(name=name)
    except Pokemon.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    data = PokemonSerializer(pokemon).data

    return Response(data)

    
# music api

@api_view(['GET'])
def allMusic(request):
    musics = Music.objects.all()
    data = MusicSerializer(musics,many=True).data
    return Response(data)

@api_view(['GET'])
def getMusic(request,id):
    try:
        music = Music.objects.get(id=id)
    except Music.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    data  = MusicSerializer(music).data
    return Response(data)

@api_view(['GET'])
def allVideos(request):
    videos = AppVideo.objects.all()
    data = AppVideoSerializer(videos,many=True).data
    return Response(data)

@api_view(['GET'])
def getVideo(request,id):
    try:
        video = AppVideo.objects.get(id=id)
    except AppVideo.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    data = AppVideoSerializer(video).data
    return Response(data)







