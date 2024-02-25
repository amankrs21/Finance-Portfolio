from users.models import User
from payment.models import Payment
from rest_framework.views import APIView
from rest_framework.response import Response
from django.utils.decorators import method_decorator
from django.contrib.auth.decorators import login_required
from users.middleware import verify_token
from .serializer import PaymentSerializer
import razorpay


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
            # for payment in payment_list:
            #     user = User.objects.get(id=payment['user'])
            #     payment['user'] = user.username
            
            if payment_list:
                return Response({'data': payment_list}, status=200)
            return Response({'message': 'No payment history found'}, status=200)
        
        except Exception as e:
            return Response({'message': str(e)}, status=500)


@method_decorator(login_required, name='dispatch')
@method_decorator(verify_token, name='dispatch')
class AdminPaymentHistory(APIView):
    def get(self, request):
        try:
            user_id = request.session.get('_auth_user_id')
            user = User.objects.get(id=user_id)
            if not user.is_superuser:
                return Response({'message': 'User not authorized'}, status=401)
            payments = Payment.objects.all()
            serializer = PaymentSerializer(payments, many=True)
            payment_list = [dict(payment) for payment in serializer.data]
            if payment_list:
                return Response({'data': payment_list}, status=200)
            return Response({'message': 'No payment history found'}, status=200)
        
        except Exception as e:
            return Response({'message': str(e)}, status=500)
 

class PaymentView(APIView):
    def post(self, request):
        try:
            data = request.data
            order_amount = 1000
            order_currency = 'INR'
            client = razorpay.Client(auth=('rzp_test_1O3z3X3z3X3z3X', 'ayrursgibh'))
            payment = client.order.create({
                'amount': order_amount,
                'currency': order_currency,
                'payment_capture': '1'
            })
            serializer = PaymentSerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return Response({'message': 'Payment successful'}, status=201)
            return Response({'message': serializer.errors}, status=400)
        except Exception as e:
            return Response({'message': str(e)}, status=500)