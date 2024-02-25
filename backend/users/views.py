from users.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import AccessToken
from django.utils.decorators import method_decorator
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout
from users.serializer import LoginSerializer, RegisterSerializer
from .middleware import verify_token


class Login(APIView):
    def post(self, request):
        try:
            data = request.data
            serializer = LoginSerializer(data=data)
            if serializer.is_valid():
                email = serializer.validated_data['email']
                password = serializer.validated_data['password']
                user = authenticate(request, email=email, password=password)
                if user is not None:
                    if user.is_active:
                        login(request, user)
                        token = AccessToken.for_user(user)
                        return Response({
                            'token': str(token),
                            'message': 'User logged in successfully.'
                        }, status=200)
                    else:
                        return Response({'message': 'User is not active'}, status=400)
                else:
                    return Response({'message': 'Invalid credentials'}, status=400)
            else:
                return Response({'message': serializer.errors}, status=400)
        except Exception as e:
            return Response({'message': str(e)}, status=500)


@method_decorator(login_required, name='dispatch')
@method_decorator(verify_token, name='dispatch')
class VerifyAdmin(APIView):
    def get(self, request):
        try:
            user_id = request.session.get('_auth_user_id')
            if (User.objects.get(id=user_id).is_superuser):
                return Response({'message': 'User is admin'}, status=200)
            else:
                return Response({'message': 'User is not admin'}, status=400)
        except Exception as e:
            return Response({'message': str(e)}, status=500)


@method_decorator(login_required, name='dispatch')
@method_decorator(verify_token, name='dispatch')
class Logout(APIView):
    def post(self, request):
        try:
            logout(request)
            return Response({'message': 'User logged out successfully'}, status=200)
        except Exception as e:
            return Response({'message': str(e)}, status=500)

        
class Register(APIView):
    def post(self, request):
        try:
            data = request.data
            serializer = RegisterSerializer(data=data)
            if serializer.is_valid():
                email = serializer.validated_data['email']
                password = serializer.validated_data['password']
                name = serializer.validated_data.get('name')
                if (User.objects.filter(email=email).exists()):
                    return Response({'message': 'User already exists'}, status=400)
                
                user = User.objects.create_user(email=email, password=password, name=name)
                if user:
                    return Response({'message': 'User created successfully'}, status=201)
                else:
                    return Response({'message': 'User creation failed'}, status=400)
            else:
                return Response({'message': serializer.errors}, status=400)
        
        except Exception as e:
            return Response({'message': str(e)}, status=500)
