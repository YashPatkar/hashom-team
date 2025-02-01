from rest_framework import serializers
from .models import hackdata, feedback

class HackdataSerializer(serializers.ModelSerializer):
    class Meta:
        model = hackdata
        fields = ['email', 'password']

class phishingformSerializer(serializers.ModelSerializer):
    class Meta:
        model = feedback
        fields = ['name', 'email', 'phishing', 'message']

    def validate_email(self, value):
        if "@" not in value:
            raise serializers.ValidationError("Invalid email address")
        return value

    def validate_message(self, value):
        if len(value) < 10:
            raise serializers.ValidationError("Message is too short")
        return value