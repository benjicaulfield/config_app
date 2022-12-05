# Generated by Django 4.1.3 on 2022-12-01 05:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Unit",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("unit_id", models.IntegerField()),
                ("unit_name", models.TextField()),
                ("topics", models.JSONField()),
            ],
        ),
        migrations.CreateModel(
            name="Topic",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("topic_id", models.IntegerField()),
                ("topic_name", models.CharField(max_length=255)),
                ("contents", models.JSONField()),
                (
                    "unit",
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        to="api.unit",
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Content",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("paragraph_id", models.IntegerField()),
                ("text", models.TextField()),
                ("question", models.TextField()),
                ("alt_question", models.TextField()),
                ("keywords", models.TextField()),
                ("intro", models.TextField()),
                ("outro", models.TextField()),
                (
                    "topic",
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        to="api.topic",
                    ),
                ),
            ],
        ),
    ]