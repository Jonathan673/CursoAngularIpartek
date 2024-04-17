import { Component, Input } from "@angular/core";

@Component({
    selector: 'titulo',
    template: '<h1>{{texto}}</h1>',
    standalone: true,
    styles: `h1 {
            background-color: black; 
            color: white; 
            padding: 0.25rem; 
            margin-top: 0;
            margin-bottom: 0;
            text-align: center;
        }`,
})
export class TituloComponent{
    @Input() texto = 'Título personalizado';
}