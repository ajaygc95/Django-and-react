__author__ = "Ajay GC"

# from django.contrib import admin
# from django.urls import path
# from . import views
#
# urlpatterns = [
#     path('', views.home,name="home"),
# ]

from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'todos', views.TodoView, 'todo')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('', views.home),
]