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
    styles: 'label{display: inline-block; width: 10em; }',
})

export class LabelInputComponent{
    @Input() etiqueta='valor inicial';
    @Input() tipo='text';
}