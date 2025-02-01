from django.contrib import admin

from .models import c1, c2, c3, c4, c5, CourseSection, hackdata, feedback

# Register your models here.
admin.site.register(c1)
admin.site.register(c2)
admin.site.register(c3)
admin.site.register(c4)
admin.site.register(c5)
admin.site.register(CourseSection)
admin.site.register(feedback)
admin.site.register(hackdata)