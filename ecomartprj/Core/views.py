from rest_framework import viewsets
from .models import Tableau, Image, Canvas, Commande, Enchere, Declaration, Recu, Categorie, Couleur, Qualite, Reduction
from .serializers import (
    TableauSerializer, ImageSerializer, CanvasSerializer, CommandeSerializer, EnchereSerializer, DeclarationSerializer, 
    RecuSerializer, CategorieSerializer, CouleurSerializer, QualiteSerializer, ReductionSerializer
)

class CategorieViewSet(viewsets.ModelViewSet):
    queryset = Categorie.objects.all()
    serializer_class = CategorieSerializer

class CouleurViewSet(viewsets.ModelViewSet):
    queryset = Couleur.objects.all()
    serializer_class = CouleurSerializer

class QualiteViewSet(viewsets.ModelViewSet):
    queryset = Qualite.objects.all()
    serializer_class = QualiteSerializer

class ReductionViewSet(viewsets.ModelViewSet):
    queryset = Reduction.objects.all()
    serializer_class = ReductionSerializer

class TableauViewSet(viewsets.ModelViewSet):
    queryset = Tableau.objects.all()
    serializer_class = TableauSerializer

class ImageViewSet(viewsets.ModelViewSet):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer

class CanvasViewSet(viewsets.ModelViewSet):
    queryset = Canvas.objects.all()
    serializer_class = CanvasSerializer

class CommandeViewSet(viewsets.ModelViewSet):
    queryset = Commande.objects.all()
    serializer_class = CommandeSerializer

class EnchereViewSet(viewsets.ModelViewSet):
    queryset = Enchere.objects.all()
    serializer_class = EnchereSerializer

class DeclarationViewSet(viewsets.ModelViewSet):
    queryset = Declaration.objects.all()
    serializer_class = DeclarationSerializer

class RecuViewSet(viewsets.ModelViewSet):
    queryset = Recu.objects.all()
    serializer_class = RecuSerializer
