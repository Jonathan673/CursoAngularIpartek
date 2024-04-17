import { Component, Input } from "@angular/core";

@Component({
    selector: 'labelinput',
    standalone: true,
    template: `
        <div>
            <label>{{etiqueta}}</label>
            <input type="{{tipo}}" placeholder="{{etiqueta}}">
        </div>
    `,
    styleUrl: './labelinput.component.css',
})

export class LabelInputComponent{
    @Input() etiqueta='valor inicial';
    @Input() tipo='text';
}