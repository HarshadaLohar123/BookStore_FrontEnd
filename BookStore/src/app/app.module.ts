import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './Component/signup/signup.component';
import { LoginComponent } from './Component/login/login.component';
import { ForgetComponent } from './Component/forget/forget.component';
import { ResetComponent } from './Component/reset/reset.component';
import {MatCardModule} from '@angular/material/card';
//import { FormsModule } from '@angular/forms'; 
import {  ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';






@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ForgetComponent,
    ResetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatCardModule,
    BrowserAnimationsModule,
    MatFormFieldModule,MatInputModule,ReactiveFormsModule,MatToolbarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
