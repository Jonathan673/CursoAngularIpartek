import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Producto } from '../producto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
  productos: Producto[] = [
    {id:1,nombre:'Monitor',precio:31.32},
    {id:2,nombre:'Monitor2',precio:32.32},
    {id:3,nombre:'Monitor3',precio:33.32},
  ] 
}
