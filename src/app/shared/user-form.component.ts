import { Component, OnChanges, Input, EventEmitter, Output } from "@angular/core";
import { User } from "../models/user.model";
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";

@Component({
    selector: 'user-form',
    templateUrl: './user-form.component.html'
})
export class UserFormControl implements OnChanges {
    userForm: FormGroup;
    @Input() users: User[];
    @Output() onSave: EventEmitter<User[]> = new EventEmitter<User[]>()

    constructor(
        private fb: FormBuilder
    ) {
        this.userForm = this.fb.group({
            children: this.fb.array([])
        })
    }

    ngOnChanges(): void {
        this.userForm.setControl('children', this.mapNestedArrays(this.users))
    }

    mapNestedArrays(users: User[]): FormArray {
        let userFGs = users.map((user: User) => {
            let userFG = this.fb.group(user);
            if (user.children && user.children.length) {
            userFG.setControl('children', this.mapNestedArrays(user.children));
            }
            return userFG;
        });
        return this.fb.array(userFGs);
    }

    save() {
        this.onSave.emit(this.userForm.value.children);
    }
}