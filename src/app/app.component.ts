import { Component, OnInit, OnChanges } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './models/user.model';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  usersData: User[] = [];
  public userForm: FormGroup;
  constructor(
    private userService: UserService,
    private fb: FormBuilder
  )
  {
    this.userForm = this.fb.group({
      children: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.userService.get().subscribe((data) => {
      this.usersData = data;
      this.userForm.setControl('children', this.mapNestedArrays(this.usersData));          
    });
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
}
