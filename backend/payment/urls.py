from django.urls import path
from .views import *

urlpatterns = [
    path('history', PaymentHistory.as_view(), name='payment'),
    path('admin/history', AdminPaymentHistory.as_view(), name='admin_payment'),
]
