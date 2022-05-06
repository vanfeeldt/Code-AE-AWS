import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import{AuthModule}from './auth/auth.module'


import { AppComponent } from './app.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent, 

    //LoginComponent,
   // RegisterComponent,
  
  //  BreadcrumbsComponent,
  //  SidebarComponent,
  //  HeaderComponent,

    //DashboardComponent,
    //ProgressComponent,
    //Grafica1Component,
    //PagesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule,
    NoopAnimationsModule,
    MaterialModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
