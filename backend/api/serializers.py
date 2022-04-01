from django.contrib.auth.models import User

from rest_framework import serializers
from rest_framework.authtoken.models import Token
from .models import Snippet,Pokemon,Music,AppVideo

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id','username','password')
        extra_kwargs = {
            'password' :{
                'write_only' : True,
                'required' : True
            }
        }

    def create(self,validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user



# snippet model
class SnippetSerializer(serializers.ModelSerializer):

    class Meta:
        model = Snippet
        fields = ('id', 'title', 'code', 'linenos', 'language', 'style')


# pokemon model
class PokemonSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Pokemon
        fields = ('id','name','img','pokemon_type')


# Music model

class MusicSerializer(serializers.ModelSerializer):

    class Meta:
        model = Music
        fields = ('id','title','artiste','album','time_length','audio_file','cover_image')



class AppVideoSerializer(serializers.ModelSerializer):

    class Meta:
        model = AppVideo
        fields = '__all__'



