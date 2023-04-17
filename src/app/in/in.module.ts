import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InRoutingModule } from './in-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { NavComponent } from './nav/nav.component';
import { TopbarComponent } from './topbar/topbar.component';
import { HomeComponent } from './home/home.component';
import { PorjectListComponent } from './porject-list/porject-list.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgChartsModule } from 'ng2-charts';
import { LogoutComponent } from './logout/logout.component';
import { CaseSensitivePipe } from './porject-list/case-sensitive.pipe'


@NgModule({
  declarations: [
    DashboardComponent,
    AddProjectComponent,
    NavComponent,
    TopbarComponent,
    HomeComponent,
    PorjectListComponent,
    LogoutComponent,
    CaseSensitivePipe,
    CaseSensitivePipe
  ],
  imports: [
    CommonModule,
    InRoutingModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    FormsModule,
    NgxPaginationModule,
    NgChartsModule,


  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class InModule { }
