from django.urls import path
from course.views import c1Demo, c2Demo, c3Demo, c4Demo, c5Demo, CoursePage, hackData, phishingform, home, tcspage, awarepage, update, blogs, p1, p2, p3, p4, t1, t2, t3, t4
urlpatterns = [
    path('c1/', c1Demo.as_view()), # This is the URL for the course sections
    path('c2/', c2Demo.as_view()), # This is the URL for the course sections
    path('c3/', c3Demo.as_view()), # This is the URL for the course sections
    path('c4/', c4Demo.as_view()), # This is the URL for the course sections
    path('c5/', c5Demo.as_view()), # This is the URL for the course sections
    path('CoursePage/', CoursePage.as_view()), # This is the URL for the course page
    path('phishingform/', phishingform.as_view()), # This is the URL for the phishing form
    path('hacked-data/', hackData.as_view()), # This is the URL for the hacked data
    path('', home, name="home"),
    path('tcspage/', tcspage, name="tcspage"),
    path('awarepage/', awarepage, name='awarepage'),
    path('update/', update),
    path('blogs/', blogs),
    path('p1/', p1),
    path('p2/', p2),
    path('p3/', p3),
    path('p4/', p4),
    path('t1/', t1),
    path('t2/', t2),
    path('t3/', t3),
    path('t4/', t4),
    

]