# Generated by Django 4.0.5 on 2022-06-25 10:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0006_comment_public_date_post_public_date_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='image',
        ),
    ]