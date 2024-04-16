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
})

export class LabelInputComponent{
    @Input() etiqueta='';
    @Input() tipo='text';
}