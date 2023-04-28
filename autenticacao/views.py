from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import Usuario
from django.contrib.auth.models import User
from django.urls import reverse




@csrf_exempt
def salvar_usuario(request):
    if request.method == 'POST':
        print(request.body)
        data = json.loads(request.body)
        nome = data["nome"]
        cpf = data["cpf"]
        usuario = User.objects.create_user(username=nome, password=cpf)
        usuario.save()
        return HttpResponse(status=201)

# Create your views here.
@login_required
def Home(request):
    return render(request, 'home/home.html')

def fazer_login(request):
    if request.user.is_authenticated:
        return redirect("Home")
    elif request.method == 'POST':
        nome = request.POST['email']
        password = request.POST['senha']
        user = authenticate(username=nome, password=password)
        print(user)
        if user is not None:

            login(request, user)
            return redirect('Home')
        else:
            return render(request, 'registration/login.html', {'mensagem':'Credenciais invalidas'})
    else:
        return render(request, 'registration/login.html')