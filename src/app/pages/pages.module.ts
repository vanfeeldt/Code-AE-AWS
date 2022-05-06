import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import{FormsModule,ReactiveFormsModule}from'@angular/forms';

import { ChartsModule } from 'ng2-charts';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';

import{SharedModule}from '../shared/shared.module';
import{ComponentsModule}from '../components/components.module';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PerfilComponent } from './perfil/perfil.component';
import { OperadorVueloComponent } from './operador-vuelo/operador-vuelo.component';
import { DeteOperadoresComponent } from './dete-operadores/dete-operadores.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

import { OperadorVuelosComponent } from './bitacoras/operador-vuelos/operador-vuelos.component';
import { DeterOperadoresComponent } from './bitacoras/deter-operadores/deter-operadores.component';

/*
/Bitacoras Estimado
*/
import { VueloXagglComponent } from './bitacoras/vuelo-xaggl/vuelo-xaggl.component';
import { VueloXauyrComponent } from './bitacoras/vuelo-xauyr/vuelo-xauyr.component';
import { VueloXalfrComponent } from './bitacoras/vuelo-xalfr/vuelo-xalfr.component';
import { VueloXaefrComponent } from './bitacoras/vuelo-xaefr/vuelo-xaefr.component';
import { VueloXalrcComponent } from './bitacoras/vuelo-xalrc/vuelo-xalrc.component';

/*
/Bitacoras Real
*/
import { VueloXauyrRealComponent } from './bitacoras-real/vuelo-xauyr-real/vuelo-xauyr-real.component';
import { VueloXalfrRealComponent } from './bitacoras-real/vuelo-xalfr-real/vuelo-xalfr-real.component';
import { VueloXagglRealComponent } from './bitacoras-real/vuelo-xaggl-real/vuelo-xaggl-real.component';
import { VueloXaefrRealComponent } from './bitacoras-real/vuelo-xaefr-real/vuelo-xaefr-real.component';
import { VueloXalrcRealComponent } from './bitacoras-real/vuelo-xalrc-real/vuelo-xalrc-real.component';
import { GraficasComponent } from './bitacoras/graficas/graficas.component';
import { DocumentosComponent } from './bitacoras/documentos/documentos.component';
import { SumaryComponent } from './bitacoras/sumary/sumary.component';
import { SumaryFinalComponent } from './bitacoras/sumary-final/sumary-final.component';

/*
/Precios
*/
import { PrecioAterriajeMexComponent } from './bitacoras/precio-aterriaje-mex/precio-aterriaje-mex.component';
import { PrecioPlataformaComponent } from './bitacoras/precio-plataforma/precio-plataforma.component';
import { PrecioCombustibleComponent } from './bitacoras/precio-combustible/precio-combustible.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    AccountSettingsComponent,
    PromesasComponent,
    RxjsComponent,
    PerfilComponent,
    OperadorVueloComponent,
    DeteOperadoresComponent,
    UsuariosComponent,
    OperadorVuelosComponent,
    DeterOperadoresComponent,
    VueloXagglComponent,
    VueloXauyrComponent,
    VueloXalfrComponent,
    VueloXaefrComponent,
    VueloXalrcComponent,
    VueloXauyrRealComponent,
    VueloXalfrRealComponent,
    VueloXagglRealComponent,
    VueloXaefrRealComponent,
    VueloXalrcRealComponent,
    GraficasComponent,
    DocumentosComponent,
    SumaryComponent,
    SumaryFinalComponent,
    PrecioAterriajeMexComponent,
    PrecioPlataformaComponent,
    PrecioCombustibleComponent,
  ],
  imports: [
    ChartsModule,
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    AccountSettingsComponent,
  ]
})
export class PagesModule { }
