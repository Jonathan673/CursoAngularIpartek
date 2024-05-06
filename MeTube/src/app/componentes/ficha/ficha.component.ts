import { Component } from '@angular/core';
import { Video } from '../../tipos/video';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrl: './ficha.component.css'
})
export class FichaComponent {
  video: Video = {
    id: 1,
    foto: 'https://youtu.be/_GaLgagHziw',
    horas: 2,
    minutos: 30,
    segundos: 30,
    titulo: 'VIKINGS',
    descripcion: 'Cosas de vikings',
    codigo: '_GaLgagHziw',

  }
}
