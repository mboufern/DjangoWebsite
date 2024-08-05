import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { TableauService } from '../../services/tableau.service';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [MatChipsModule],
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss',
})
export class StoreComponent {

  categories: any[] = [];
  couleurs: any[] = [];
  qualites: any[] = [];
  tableaux: any[] = [];
  filteredTableaux: any[] = [];

  selectedCategories: number[] = [];
  selectedCouleurs: number[] = [];
  selectedQualites: number[] = [];

  paginationInfo: {} = {};

  constructor(private tableauService: TableauService) {}

  ngOnInit() {
    this.tableauService.getCategories().subscribe(data => this.categories = data.results);
    this.tableauService.getCouleurs().subscribe(data => this.couleurs = data.results);
    this.tableauService.getQualites().subscribe(data => this.qualites = data.results);
    this.tableauService.getTableaux().subscribe(data => {
      this.tableaux = data.results;
      this.filteredTableaux = data.results;
      this.paginationInfo = {
        count: data.count,
        next: data.next,
        previous: data.previous
      };
    });
  }

  filterByCategories(event: any) {
    this.selectedCategories = event.source.selectedOptions.selected.map((option: { value: any; }) => option.value);
    this.applyFilters();
  }

  filterByCouleurs(event: any) {
    this.selectedCouleurs = event.source.selectedOptions.selected.map((option: { value: any; }) => option.value);
    this.applyFilters();
  }

  filterByQualites(event: any) {
    this.selectedQualites = event.source.selectedOptions.selected.map((option: { value: any; }) => option.value);
    this.applyFilters();
  }

  applyFilters() {
    this.filteredTableaux = this.tableaux.filter(tableau => {
      const categoryMatch = this.selectedCategories.length === 0 || this.selectedCategories.includes(tableau.categoryId);
      const couleurMatch = this.selectedCouleurs.length === 0 || tableau.couleurs.some((couleurId: number) => this.selectedCouleurs.includes(couleurId));
      const qualiteMatch = this.selectedQualites.length === 0 || this.selectedQualites.includes(tableau.qualiteId);
      return categoryMatch && couleurMatch && qualiteMatch;
    });
  }
}
