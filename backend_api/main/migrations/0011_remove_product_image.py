# Generated by Django 5.1.2 on 2025-06-01 04:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0010_product_image_product_tags_productimage'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='image',
        ),
    ]
