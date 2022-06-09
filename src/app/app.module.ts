import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SignupcomponentComponent } from './signupcomponent/signupcomponent.component';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { HeadercomponentComponent } from './headercomponent/headercomponent.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SignupcomponentComponent,
    LogincomponentComponent,
    HeadercomponentComponent,
    HomecomponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
