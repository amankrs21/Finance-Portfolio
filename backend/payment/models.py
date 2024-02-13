from django.db import models
from users.models import User

# Create your models here.
class Payment(models.Model):
    pay_id = models.TextField(unique=True, primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    amount = models.FloatField()
    date = models.DateTimeField(auto_now_add=True)
    status = models.BooleanField(default=True)
    description = models.TextField()
    
    def __str__(self):
        return self.pay_id