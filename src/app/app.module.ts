import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { UserFormControl } from './shared/user-form.component';
import { UserFromItemComponent } from './shared/user-form-item.component';


@NgModule({
  declarations: [
    AppComponent,
    UserFormControl,
    UserFromItemComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
