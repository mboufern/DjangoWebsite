from django.contrib import admin
from .models import (
    Categorie, Couleur, Qualite, Reduction, Tableau, 
    Image, Canvas, Commande, Enchere, Declaration, Recu
)

# Inline classes
class ImageInline(admin.TabularInline):
    model = Image
    extra = 1

class CanvasInline(admin.TabularInline):
    model = Canvas
    extra = 1

class CommandeInline(admin.TabularInline):
    model = Commande
    extra = 1

class EnchereInline(admin.TabularInline):
    model = Enchere
    extra = 1

class DeclarationInline(admin.TabularInline):
    model = Declaration
    extra = 1

class RecuInline(admin.TabularInline):
    model = Recu
    extra = 1

# Admin classes
@admin.register(Tableau)
class TableauAdmin(admin.ModelAdmin):
    inlines = [ImageInline, CanvasInline, CommandeInline, EnchereInline]

@admin.register(Categorie)
class CategorieAdmin(admin.ModelAdmin):
    pass

@admin.register(Couleur)
class CouleurAdmin(admin.ModelAdmin):
    pass

@admin.register(Qualite)
class QualiteAdmin(admin.ModelAdmin):
    pass

@admin.register(Reduction)
class ReductionAdmin(admin.ModelAdmin):
    pass

@admin.register(Image)
class ImageAdmin(admin.ModelAdmin):
    pass

@admin.register(Canvas)
class CanvasAdmin(admin.ModelAdmin):
    pass

@admin.register(Commande)
class CommandeAdmin(admin.ModelAdmin):
    inlines = [RecuInline]

@admin.register(Enchere)
class EnchereAdmin(admin.ModelAdmin):
    inlines = [DeclarationInline, RecuInline]

@admin.register(Declaration)
class DeclarationAdmin(admin.ModelAdmin):
    pass

@admin.register(Recu)
class RecuAdmin(admin.ModelAdmin):
    pass
