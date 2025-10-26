from django.db import models

class Company(models.Model):
    COMPANY_TYPE = (
        ('UNIVERSAL CODEBOX', 'UNIVERSAL CODEBOX'),
        ('WEB DEVELOPER', 'WEB DEVELOPER'),
    )

    company_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    about = models.CharField(max_length=255)
    message = models.CharField(max_length=500)  # ✅ Fixed spelling
    email = models.EmailField(max_length=254)
    type = models.CharField(max_length=100, choices=COMPANY_TYPE)
    added = models.DateTimeField(auto_now=True)
    image = models.ImageField(upload_to='company_images/', blank=True, null=True)

    def __str__(self):
        return self.name
