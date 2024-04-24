import { Injectable } from '@angular/core';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  productos: Producto[] = [
    { id: 1, nombre: 'Monitor', precio: 31.32 },
    { id: 2, nombre: 'Monitor2', precio: 32.32 },
    { id: 3, nombre: 'Monitor3', precio: 33.32 },
  ]

  obtenerTodos(): Producto[] {
    return this.productos
  }
}
