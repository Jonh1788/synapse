from django.db import models

# Create your models here.
class Usuario(models.Model):
    nome = models.CharField(max_length=150, unique=True)
    password = models.CharField(max_length=50)
    USERNAME_FIELD = 'nome'
    REQUIRED_FIELDS = []
    def check_password(self, raw_password):
        return check_password(raw_password, self.password)
    @property
    def is_anonymous(self):
        return False

    @property
    def is_authenticated(self):
        return True