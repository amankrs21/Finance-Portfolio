from rest_framework import status
from django.http import JsonResponse
from rest_framework_simplejwt.authentication import JWTAuthentication

def verify_token(view_func):
    def _wrapped_view(request, *args, **kwargs):
        try:
            auth_header = request.headers.get('Authorization')
            if auth_header is None or not auth_header.startswith('Bearer '):
                return JsonResponse({'error': 'Invalid authorization header'}, status=status.HTTP_401_UNAUTHORIZED)
            token = auth_header.split()[1]

            jwt_auth = JWTAuthentication()
            try:
                jwt_auth.get_validated_token(token)
                return view_func(request, *args, **kwargs)
            except Exception as e:
                return JsonResponse({'error': 'Invalid or expired token'}, status=status.HTTP_401_UNAUTHORIZED)

        except Exception as e:
            return JsonResponse({'error': 'Invalid or expired token'}, status=status.HTTP_401_UNAUTHORIZED)

    return _wrapped_view
