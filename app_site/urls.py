from . import views
from django.urls import path
from django.conf import settings

urlpatterns = [
    path("", views.home, name="home"),
    path("login/", views.login, name="login"),
    path("logout/", views.logout, name="logout"),
    path("register/", views.register_new_user, name="register_new_user"),

    path("painel/", views.painel, name="painel_user"),
]