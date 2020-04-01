import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegComponent } from './reg/reg.component';
import { NewsinputComponent } from './newsinput/newsinput.component';


const routes: Routes = [
  {path:"Register", component:RegComponent},
  {path:"Login", component:LoginComponent},
  {path:"Analysis", component:NewsinputComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
