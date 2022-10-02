from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def gpaPage(request):
    return render(request, 'gpaPage.html')
