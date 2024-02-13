from payment.models import Payment
from rest_framework.views import APIView
from rest_framework.response import Response
from django.utils.decorators import method_decorator
from django.contrib.auth.decorators import login_required
from users.middleware import verify_token
from .serializer import PaymentSerializer


@method_decorator(login_required, name='dispatch')
@method_decorator(verify_token, name='dispatch')
class PaymentHistory(APIView):
    def get(self, request):
        try:
            user_id = request.session.get('_auth_user_id')
            if not user_id:
                return Response({'message': 'User not logged in'}, status=401)
            payments = Payment.objects.filter(user_id=user_id)
            serializer = PaymentSerializer(payments, many=True)
            payment_list = [dict(payment) for payment in serializer.data]
            if payment_list:
                return Response({'data': payment_list}, status=200)
            return Response({'message': 'No payment history found'}, status=200)
        
        except Exception as e:
            return Response({'message': str(e)}, status=500)
        