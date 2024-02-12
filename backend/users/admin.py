from django.contrib import admin
from users.models import User
from django.contrib.auth.models import Group, Permission

from django.contrib.auth import get_user_model

User = get_user_model()

class UserAdmin(admin.ModelAdmin):
    def save_model(self, request, obj, form, change):
        if obj.pk:
            orig_obj = User.objects.get(pk=obj.pk)
            if obj.password != orig_obj.password:
                obj.set_password(obj.password)
        else:
            obj.set_password(obj.password)
        super().save_model(request, obj, form, change)

admin.site.register(User, UserAdmin)

# Register your models here.
admin.site.unregister(Group)

# add existing permissions and groups to the custom user model
admin.site.register(Permission)
admin.site.register(Group)