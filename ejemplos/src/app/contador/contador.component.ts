import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  template: `
      <button (click)="onBotonPulsado()">{{numero}}</button>
      <button (click)="onResetearPulsado()">Reset</button>
        `,
  imports: [],
  //  templateUrl: './contador.component.html',
  //  styleUrl: './contador.component.css'
})

export class ContadorComponent {
  @Input('inicial') numero = 0;
  @Output() cambioNumero = new EventEmitter<number>();

  //Metodo el cual resetea el valos del primer botón y del h1 del cuerpo
  onResetearPulsado() {
    this.numero = 0;
    this.cambioNumero.emit(this.numero);
  }
  //Metodo el cual incrementa el valor del numero en 1 hasta que llega a 10.
  onBotonPulsado() {
    this.numero++;

    if (this.numero >= 10) {
      this.numero = 0;
    }
    this.cambioNumero.emit(this.numero);
  }
}
