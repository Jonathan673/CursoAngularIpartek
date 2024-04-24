import { Injectable } from '@angular/core';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {


  obtenerTodos(): Producto[] {
    return this.productos
  }
}
