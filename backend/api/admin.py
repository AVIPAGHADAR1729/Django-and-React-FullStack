from django.contrib import admin

# Register your models here.
from .models import Snippet,Pokemon,Music,Album,AppVideo

admin.site.register([Snippet,Pokemon,Album,Music,AppVideo])