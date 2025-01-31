from rest_framework.views import APIView
from rest_framework.response import Response
from .models import c1, c2, c3, c4, c5, CourseSection

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
class CoursePage(APIView):
    def get(self, request):
        try:
            data = CourseSection.objects.all()
            return Response(data)
        except:
            return Response({'status': 400})