import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  template: '<button (click)="onBotonPulsado()">{{numero}}</button>',
  imports: [],
  //  templateUrl: './contador.component.html',
  //  styleUrl: './contador.component.css'
})

export class ContadorComponent {
  @Input('inicial') numero = 0;
  onBotonPulsado() {
    this.numero++;
  }
}
