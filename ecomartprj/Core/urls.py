from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    TableauViewSet, ImageViewSet, CanvasViewSet, CommandeViewSet, EnchereViewSet, DeclarationViewSet, RecuViewSet,
    CategorieViewSet, CouleurViewSet, QualiteViewSet, ReductionViewSet
)

router = DefaultRouter()
router.register(r'categories', CategorieViewSet)
router.register(r'couleurs', CouleurViewSet)
router.register(r'qualites', QualiteViewSet)
router.register(r'reductions', ReductionViewSet)
router.register(r'tableaux', TableauViewSet)
router.register(r'images', ImageViewSet)
router.register(r'canvases', CanvasViewSet)
router.register(r'commandes', CommandeViewSet)
router.register(r'encheres', EnchereViewSet)
router.register(r'declarations', DeclarationViewSet)
router.register(r'recus', RecuViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
