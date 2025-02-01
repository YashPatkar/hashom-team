from django.db import models

class CourseSection(models.Model):
    type = models.CharField(max_length=255, unique=True, blank=False)
    title = models.CharField(max_length=255)

class hackdata(models.Model):
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    datetime = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f"Email: {self.email}"
    
class feedback(models.Model):
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=255, null=True, blank=True)
    company = models.CharField(max_length=255, null=True, blank=True)
    phishing = models.CharField(max_length=255)
    message = models.TextField()
    def __str__(self):
        return f"Phishing Type: {self.phishing}"
    
# Create your models here.
class c1(models.Model):
    optionid = models.AutoField(primary_key=True)
    question_text = models.TextField()
    option_1 = models.CharField(max_length=255)
    option_2 = models.CharField(max_length=255)
    option_3 = models.CharField(max_length=255)
    option_4 = models.CharField(max_length=255)
    correctoption = models.CharField(max_length=255)

    def __str__(self):
        return f"[{self.category}] {self.question_text}"

class c2(models.Model):
    optionid = models.AutoField(primary_key=True)
    question_text = models.TextField()
    option_1 = models.CharField(max_length=255)
    option_2 = models.CharField(max_length=255)
    option_3 = models.CharField(max_length=255)
    option_4 = models.CharField(max_length=255)
    correctoption = models.CharField(max_length=255)

    def __str__(self):
        return f"Question: {self.question_text}"

class c3(models.Model):
    optionid = models.AutoField(primary_key=True)
    question_text = models.TextField()
    option_1 = models.CharField(max_length=255)
    option_2 = models.CharField(max_length=255)
    option_3 = models.CharField(max_length=255)
    option_4 = models.CharField(max_length=255)
    correctoption = models.CharField(max_length=255)
    def __str__(self):
        return f"Question: {self.question_text}"

class c4(models.Model):
    optionid = models.AutoField(primary_key=True)
    question_text = models.TextField()
    option_1 = models.CharField(max_length=255)
    option_2 = models.CharField(max_length=255)
    option_3 = models.CharField(max_length=255)
    option_4 = models.CharField(max_length=255)
    correctoption = models.CharField(max_length=255)
    def __str__(self):
        return f"Question: {self.question_text}"

class c5(models.Model):
    optionid = models.AutoField(primary_key=True)
    question_text = models.TextField()
    option_1 = models.CharField(max_length=255)
    option_2 = models.CharField(max_length=255)
    option_3 = models.CharField(max_length=255)
    option_4 = models.CharField(max_length=255)
    correctoption = models.CharField(max_length=255)
    def __str__(self):
        return f"Question: {self.question_text}"