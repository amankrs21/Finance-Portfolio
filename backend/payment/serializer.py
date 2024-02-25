from rest_framework import serializers
from .models import Payment

class PaymentSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField()  # This line is crucial.

    class Meta:
        model = Payment
        fields = '__all__'  # Ensures 'user' field is included among others.

    def get_user(self, obj):
        return obj.user.email  # Make sure 'user' is the related name to the User model.
