from os import name
from django.urls import path,include

from rest_framework import routers

from .views import UserViewSet, allMusic, allVideos, getMusic, getVideo,snippet_detail,snippet_list,getAllPokemon,getPokemon

router = routers.DefaultRouter()
router.register('users',UserViewSet)

urlpatterns = [
     path('',include(router.urls)),
     path('snippets/',snippet_list,name='snippet_list'),
     path('snippets/<int:pk>',snippet_detail),
     path('pokemons/',getAllPokemon,name='getAllPokemon'),
     path('pokemons/<str:name>',getPokemon),
     path('allmusics/',allMusic,name='allmusics'),
     path('allmusics/<int:id>',getMusic,),
     path('allvideos/',allVideos,name='allvideos'),
     path('allvideos/<int:id>',getVideo)
]
