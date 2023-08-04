from django.contrib import admin
from django.urls import path, include
from django.conf.urls import handler404

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", include("app_site.urls")),
]

handler404 = 'app_site.views.error_404_view'