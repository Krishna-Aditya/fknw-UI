import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent } from './login/login.component';
import { NewsinputComponent } from './newsinput/newsinput.component';
import { RegComponent } from './reg/reg.component';


const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'Login', component:NewsinputComponent},
  {path:'Register', component:RegComponent},
]
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
