from django.urls import path
from . import views

urlpatterns = [
    path("", views.fazer_login, name="Login"),
    path("salvarUsuario", views.salvar_usuario, name="salvarUsuario"),
    path("home/", views.Home, name="Home"),

]