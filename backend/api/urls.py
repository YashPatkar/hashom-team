from django.urls import path
from course.views import c1Demo, c2Demo, c3Demo, c4Demo, c5Demo, CoursePage

urlpatterns = [
    path('c1/', c1Demo.as_view(), name='c1-list'),
    path('c2/', c2Demo.as_view(), name='c2-list'),
    path('c3/', c3Demo.as_view(), name='c3-list'),
    path('c4/', c4Demo.as_view(), name='c4-list'),
    path('c5/', c5Demo.as_view(), name='c5-list'),
    path('CoursePage/', CoursePage.as_view())
]
