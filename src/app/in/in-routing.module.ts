import { PorjectListComponent } from './porject-list/porject-list.component';
import { HomeComponent } from './home/home.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {path:'',component:HomeComponent,
  children: [
    {
      path:'',component:DashboardComponent
    },
    {

      path:'dashboard',
      component: DashboardComponent,
    },
    {
        path:'add-project',component:AddProjectComponent
    },
    {
      path:'project-list', component:PorjectListComponent
    },
    {
      path:'logout', component:LogoutComponent
    },
  ]
},
{
  path:'in',redirectTo:'in/home', pathMatch:'full'
},
  // {
  //   path:'dashboard',component:DashboardComponent,outlet:'in'
  // }
  // ,
  // {
  //   path:'add-project',component:AddProjectComponent
  // }
  // ,
  // {
  //   path:'project-list',component:AddProjectComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InRoutingModule { }
