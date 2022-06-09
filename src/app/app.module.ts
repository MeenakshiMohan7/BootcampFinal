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
import { TaskcomponentComponent } from './taskcomponent/taskcomponent.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MaterialModule } from './material.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
// import { MatAccordion } from '@angular/material/expansion/accordion';

@NgModule({
  declarations: [
    AppComponent,
    SignupcomponentComponent,
    LogincomponentComponent,
    HeadercomponentComponent,
    HomecomponentComponent,
    TaskcomponentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
