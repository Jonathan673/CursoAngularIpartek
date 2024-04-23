import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { CommonModule } from '@angular/common';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  //#filter es una declaracion de variable de plantilla, para usarla en otro sitio. Se usa en el boton de abajo
  template: `
              <section>
                <form>
                  <input type="text" placeholder="Filter by city" #filter>
                  <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
                </form>
              </section>
              <section class="results">
                <app-housing-location *ngFor="let housingLocation of filteredLocationList" 
                [housingLocation]="housingLocation"></app-housing-location>
              </section>
            `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  //Lista filtrada de casas
  filteredLocationList: HousingLocation[] = [];
  //
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;
  }
  filterResults(text: string) {
    //si no hay texto coge todas las casas y sal del método
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    //si no se da el if anterior, filtrame el cacho de texto entre las ciudades que tengo
    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}
