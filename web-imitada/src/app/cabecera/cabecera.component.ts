import { Component } from '@angular/core';
import { MenudesplegableComponent } from '../menudesplegable/menudesplegable.component';
import { MenuprincipalComponent } from '../menuprincipal/menuprincipal.component';
import { BarrabusquedaComponent } from '../barrabusqueda/barrabusqueda.component';
import { RedessocialesComponent } from '../redessociales/redessociales.component';

@Component({
  selector: 'app-cabecera',
  standalone: true,
  imports: [MenudesplegableComponent,MenuprincipalComponent,BarrabusquedaComponent,RedessocialesComponent],
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.css'
})
export class CabeceraComponent {

}
