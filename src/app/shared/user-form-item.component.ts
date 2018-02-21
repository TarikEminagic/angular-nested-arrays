import { Component, Input, EventEmitter, Output } from "@angular/core";
import { FormArray } from "@angular/forms";

@Component({
    selector: 'user-form-item',
    templateUrl: './user-form-item.component.html',
    styleUrls: ['./user-form-item.component.scss']
})
export class UserFromItemComponent {
    @Input() parent: FormArray;
    @Input() arrayName: string;

    // @Output() onArrayChange: EventEmitter<FormArray> = new EventEmitter<FormArray>();
}