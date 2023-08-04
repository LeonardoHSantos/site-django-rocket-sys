import json
from django.shortcuts import render, redirect
from django.http.response import JsonResponse

from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.contrib.auth import login as login_user, logout as logout_user # authenticate
from .backends import EmailBackend

from .forms import NewUser, LoginUser



# ----
def home(request):
    if request.method == "GET":
        return render(request, "app/home.html")
    elif request.method == "POST":
        return JsonResponse({"msg": "error"})
# ----
def login(request):
    if request.method == "GET":
        form = LoginUser()
        context = {
            "form_register": form
        }
        return render(request, "app/login.html", context=context)
    elif request.method == "POST":
        # print(request.POST)
        data = request.POST
        user_email = data.get("email")
        password = data.get("password")

        user = EmailBackend.authenticate(
            self="",
            request=request,
            username=user_email,
            password=password)
        if user is not None:
            login_user(request, user=user)
            return redirect("painel_user")

        form = LoginUser(data=data)
        context = {
            "form_register": form,
            "user_not_found": True
        }

        return render(request, "app/login.html", context=context)
    
def logout(request):
    try:
        logout_user(request=request)
        return redirect("login")
    except Exception as e:
        print(f" ### ERROR LOGOUT USER | ERROR: {e}")
        return redirect("home")
# ----
def register_new_user(request):
    if request.method == "GET":
        form = NewUser()
        context = {
            "form_register": form
        }
        return render(request, "app/register_new_user.html", context=context)
    elif request.method == "POST":
        data = request.POST
        # print(" ----------- POST ----------- ")
        name = data.get("name")
        email = data.get("email")
        password_1 = data.get("password_1")
        password_2 = data.get("password_2")
        
        form = NewUser(data=data)
        context = {
            "form_register": form,
            "password_1": password_1,
            "password_2": password_2,
            "form_invalid": False
        }
        if form.is_valid():
            print(" ********************* formulário valido ********************* ")
            user_email = User.objects.filter(email=email).count()
            print(f"TT User-email: {user_email}")
            if user_email >= 1:
                context.update(user_exists=True)
                return render(request, "app/register_new_user.html", context=context)
            else:

                User.objects.create_user(
                    username=name,
                    email=email,
                    password=password_1
                ).save()
                return redirect("home")
            
        else:
            print(" ********************* formulário invalido ********************* ")
            context["form_invalid"] = True
            return render(request, "app/register_new_user.html", context=context)
# ----
@login_required
def painel(request):
    if request.method == "GET":
        return render(request, "app/painel.html")



def error_404_view(request, exception):
    return render(request, "app/error_404.html")
    # return JsonResponse({"error": "page not found"})