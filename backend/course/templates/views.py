from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import HackdataSerializer, phishingformSerializer
from .models import c1, c2, c3, c4, c5, CourseSection, hackdata
from django.shortcuts import render
class c1Demo(APIView):
    def get(self, request):
        try:
            data = c1.objects.all()
            return Response(data, status=200)
        except:
            return Response({'status': 400})
class c2Demo(APIView):
    def get(self, request):
        try:
            data = c2.objects.all()
            return Response(data, status=200)
        except:
            return Response({'status': 400})
class c3Demo(APIView):
    def get(self, request):
        try:
            data = c3.objects.all()
            return Response(data, status=200)
        except:
            return Response({'status': 400})
class c4Demo(APIView):
    def get(self, request):
        try:
            data = c4.objects.all()
            return Response(data, status=200)
        except:
            return Response({'status': 400})
class c5Demo(APIView):
    def get(self, request):
        try:
            data = c5.objects.all()
            return Response(data, status=200)
        except:
            return Response({'status': 400})


# All the course sections get from database and give it to frontend
class CoursePage(APIView): #CoursePage/
    def get(self, request):
        try:
            data = CourseSection.objects.all()
            return Response(data)
        except:
            return Response(status=400)

class hackData(APIView):  #hacked-data/
    def post(self, request):
        data = request.data
        serializer = HackdataSerializer(data=data)
        serializer.save()
        return Response(data)
    
class phishingform(APIView):  #phishingform/
    def post(self, request):

        data = request.data
        serializer = phishingformSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(data, status=200)
        return Response(serializer.errors)
    
def home(request):
    return render(request, 'landing_page.html')

def tcspage(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        hackObject = hackdata.objects.create(email=email, password=password)
        return render(request, 'awarepage.html')
    return render(request, 'index.html')