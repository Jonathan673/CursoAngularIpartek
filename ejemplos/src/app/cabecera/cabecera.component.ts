import { Component } from '@angular/core';
import { TituloComponent } from '../titulo.component';
import { MenuprincipalComponent } from '../menuprincipal/menuprincipal.component';

@Component({
  selector: 'app-cabecera',
  standalone: true,
  imports: [TituloComponent, MenuprincipalComponent],
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.css'
})
export class CabeceraComponent {

}
