import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductoService } from '../producto.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Producto } from '../producto';
import { Location } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  ruta = inject(ActivatedRoute);
  servicio = inject(ProductoService);
  location = inject(Location);




  form = new FormGroup({
    id: new FormControl(0),
    nombre: new FormControl(''),
    precio: new FormControl(0),
  })



  constructor (){
    const id = Number(this.ruta.snapshot.params['id']);
    if(id){
      this.servicio.obtenerPorId(id).then(productoRecibido => {
        //coge todos los valores del producto recibido y metelos en el formulario
        this.form.setValue(productoRecibido);
      });
    }
  }

  async guardar(){
    //para ver por consola los datos
    //console.log(this.form.value);
    const producto = this.form.value as Producto;

    if(producto.id){
      await this.servicio.modificar(producto);
    }else{
      await this.servicio.insertar(producto);
    }
    this.location.back();
  }
}
