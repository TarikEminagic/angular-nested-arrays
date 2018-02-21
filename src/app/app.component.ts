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
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.get().subscribe((data) => {
      this.usersData = data;          
    });
  }

  saveChanges(users: User[]) {
    this.usersData = users;
  }
}
