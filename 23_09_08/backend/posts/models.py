from django.db import models

# Create your models here.


class Post(models.Model):

    title = models.CharField(max_length=50, default="")
    content = models.TextField(default="")
    user = models.ForeignKey(
        "users.User", on_delete=models.CASCADE, default="")
