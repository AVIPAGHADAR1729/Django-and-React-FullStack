from django.db import models
from django.contrib.auth.models import User
# Create your models here.
from pygments.lexers import get_all_lexers
from pygments.styles import get_all_styles

LEXERS = [item for item in get_all_lexers() if item[1]]
LANGUAGE_CHOICES = sorted([(item[1][0], item[0]) for item in LEXERS])
STYLE_CHOICES = sorted([(item, item) for item in get_all_styles()])

# snippet 
class Snippet(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=100, blank=True, default='')
    code = models.TextField()
    linenos = models.BooleanField(default=False)
    language = models.CharField(choices=LANGUAGE_CHOICES, default='python', max_length=100)
    style = models.CharField(choices=STYLE_CHOICES, default='friendly', max_length=100)

    class Meta:
        ordering = ['created']


# pokemon model
class Pokemon(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=30)
    img = models.FileField(upload_to='media_data')
    pokemon_type = models.CharField(max_length=30)
    
    def __str__(self):
        return self.name


# music api

from .helper import get_audio_length
from .validate import validate_is_audio

class Music(models.Model):
    title=models.CharField(max_length=500)
    artiste=models.CharField(max_length=500)
    album=models.ForeignKey('Album',on_delete=models.SET_NULL,null=True,blank=True)
    time_length=models.DecimalField(max_digits=20, decimal_places=2,blank=True)
    audio_file=models.FileField(upload_to='music_audio/',validators=[validate_is_audio])
    cover_image=models.FileField(upload_to='music_images/')

    def save(self,*args, **kwargs):
        if not self.time_length:
            # logic for getting length of audio
            audio_length=get_audio_length(self.audio_file)
            self.time_length =f'{audio_length:.2f}'

        return super().save(*args, **kwargs)

    class Meta:
        ordering = ['id']

    def __str__(self):
        return f'{self.title} | {self.artiste}'


class Album(models.Model):
    name=models.CharField(max_length=400)



# Youtube clone

class AppVideo(models.Model):
    title = models.CharField(max_length=250)
    description = models.TextField()
    file = models.FileField(upload_to='video_data')
    upload_by = models.ForeignKey(to=User,blank=True,null=True,on_delete=models.SET_NULL)
    upload_time = models.DateTimeField(auto_now_add=True)
    total_view = models.PositiveIntegerField(default=0,null=True,blank=True)
    def __str__(self):
        return f'{self.title} | {self.upload_by}'






