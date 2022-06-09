import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { SignupcomponentComponent } from './signupcomponent/signupcomponent.component';
import { TaskcomponentComponent } from './taskcomponent/taskcomponent.component';

const routes: Routes = [{path:"",component:HomecomponentComponent},
{path:"login",component:LogincomponentComponent},
{path:"signup",component:SignupcomponentComponent},
{path:"task",component:TaskcomponentComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
