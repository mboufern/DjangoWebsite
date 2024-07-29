# gallery/serializers.py
from rest_framework import serializers
from .models import Tableau, Image, Canvas, Commande, Enchere, Declaration, Recu, Categorie, Couleur, Qualite, Reduction

class CategorieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categorie
        fields = '__all__'

class CouleurSerializer(serializers.ModelSerializer):
    class Meta:
        model = Couleur
        fields = '__all__'

class QualiteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Qualite
        fields = '__all__'

class ReductionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reduction
        fields = '__all__'

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = '__all__'

class CanvasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Canvas
        fields = '__all__'

class CommandeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Commande
        fields = '__all__'

class EnchereSerializer(serializers.ModelSerializer):
    class Meta:
        model = Enchere
        fields = '__all__'

class DeclarationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Declaration
        fields = '__all__'

class RecuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recu
        fields = '__all__'

class TableauSerializer(serializers.ModelSerializer):
    images = ImageSerializer(many=True, read_only=True)
    canvases = CanvasSerializer(many=True, read_only=True)
    commandes = CommandeSerializer(many=True, read_only=True)
    encheres = EnchereSerializer(many=True, read_only=True)

    class Meta:
        model = Tableau
        fields = '__all__'
