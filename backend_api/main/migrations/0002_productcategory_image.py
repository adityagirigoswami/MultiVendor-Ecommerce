# Generated by Django 5.2.1 on 2025-06-30 06:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='productcategory',
            name='image',
            field=models.ImageField(null=True, upload_to='category_imgs/'),
        ),
    ]
