from django.db import models

class Categorie(models.Model):
    nom = models.CharField(max_length=128)

    def __str__(self):
        return self.name

class Couleur(models.Model):
    nom = models.CharField(max_length=128)

    def __str__(self):
        return self.name

class Qualite(models.Model):
    nom = models.CharField(max_length=128)

    def __str__(self):
        return self.name

class Reduction(models.Model):
    nom = models.CharField(max_length=128)
    pourcentage = models.IntegerField()

    def __str__(self):
        return self.name
    
class Tableau(models.Model):
    class Etat(models.TextChoices):
        EN_VENTE = 'EN_VENTE', 'En vente'
        EN_ENCHERE = 'EN_ENCHERE', 'En enchere'
        VENDU = 'VENDU', 'Vendu'
        RESERVE = 'RESERVE', 'Réservé'

    titre = models.CharField(max_length=128, unique=True)
    prix = models.FloatField(blank=True, null=True)
    date = models.DateTimeField()
    description = models.TextField()
    etat = models.CharField(max_length=12, choices=Etat.choices, default=Etat.RESERVE,)
    categories = models.ManyToManyField(Categorie)
    couleurs = models.ManyToManyField(Couleur)
    qualites = models.ForeignKey(Qualite, on_delete=models.SET_NULL, null=True,)

    def __str__(self):
        return self.titre
    
class Image(models.Model):
    tableau = models.ForeignKey(Tableau, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='tableau_images/', null=True)
    description = models.TextField(blank=True)
    
class Canvas(models.Model):
    emplacement = models.FloatField(blank=True, null=True)
    image = models.ImageField(upload_to='textures/', null=True)
    largeur = models.SmallIntegerField()
    hauteur = models.SmallIntegerField()
    tableau = models.ForeignKey(Tableau, on_delete=models.CASCADE, related_name='canvases')

    def __str__(self):
        return f"L{self.largeur} x H{self.hauteur}"

class Commande(models.Model):
    nomcomplet = models.CharField(max_length=128,)
    tel = models.CharField(max_length=128,)
    livraison = models.BooleanField(blank=True, null=True,)
    adresse = models.CharField(max_length=128, blank=True, null=True,)
    date = models.DateField()
    message = models.TextField(blank=True, null=True,)
    tableau = models.ForeignKey(Tableau, on_delete=models.SET_NULL, null=True, related_name='commandes')

class Enchere(models.Model):
    dateDebut = models.DateField()
    dateFin = models.DateField()
    prixDebut = models.FloatField()
    prixFin = models.FloatField(blank=True, null=True,)
    tableau = models.ForeignKey(Tableau, on_delete=models.SET_NULL, null=True, related_name='echeres')

class Declaration(models.Model):
    nomcomplet = models.CharField(max_length=128, )
    tel = models.CharField(max_length=128, )
    livraison = models.BooleanField(blank=True, null=True,)
    adresse = models.CharField(max_length=128, blank=True, null=True,)
    prix = models.FloatField()
    date = models.DateField()
    enchere = models.ForeignKey(Enchere, on_delete=models.CASCADE, related_name='declarations')

class Recu(models.Model):
    prixAchat = models.FloatField()
    dateAchat = models.DateField()
    commande = models.ForeignKey(Commande, on_delete=models.SET_NULL, blank=True, null=True, related_name='recuscom')
    enchere = models.ForeignKey(Enchere, on_delete=models.SET_NULL, blank=True, null=True, related_name='recusdec')