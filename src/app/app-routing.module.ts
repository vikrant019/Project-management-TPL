import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LoginGuard } from './auth/login.guard';
import { LoginInGuard } from './auth/login-in.guard';

const routes: Routes = [
{path:'',component:LoginComponent,canActivate:[LoginInGuard]},
{
  path:'in',loadChildren:()=>import('./in/in.module').then(m=>m.InModule),canActivate:[LoginGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
