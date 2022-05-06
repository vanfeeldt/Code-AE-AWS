import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from '../guards/auth.guard';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

import { PerfilComponent } from './perfil/perfil.component';
import { OperadorVueloComponent } from './operador-vuelo/operador-vuelo.component';
import { DeteOperadoresComponent } from './dete-operadores/dete-operadores.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

//Bitacoras
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
import { GraficasComponent } from './bitacoras/graficas/graficas.component';
import { DocumentosComponent } from './bitacoras/documentos/documentos.component';
import { SumaryComponent } from './bitacoras/sumary/sumary.component';
import { SumaryFinalComponent } from './bitacoras/sumary-final/sumary-final.component';
/*
/Bitacoras Real
*/
import { VueloXauyrRealComponent } from './bitacoras-real/vuelo-xauyr-real/vuelo-xauyr-real.component';
import { VueloXalfrRealComponent } from './bitacoras-real/vuelo-xalfr-real/vuelo-xalfr-real.component';
import { VueloXagglRealComponent } from './bitacoras-real/vuelo-xaggl-real/vuelo-xaggl-real.component';
import { VueloXaefrRealComponent } from './bitacoras-real/vuelo-xaefr-real/vuelo-xaefr-real.component';
import { VueloXalrcRealComponent } from './bitacoras-real/vuelo-xalrc-real/vuelo-xalrc-real.component';

/*
/Precios
*/
import { PrecioAterriajeMexComponent } from './bitacoras/precio-aterriaje-mex/precio-aterriaje-mex.component';
import { PrecioPlataformaComponent } from './bitacoras/precio-plataforma/precio-plataforma.component';
import { PrecioCombustibleComponent } from './bitacoras/precio-combustible/precio-combustible.component';




const routes: Routes = [
    { 
        path: 'dashboard', 
        component: PagesComponent,
        canActivate:[AuthGuard],
        children: [
            { path: '', component: DashboardComponent, data: { titulo: 'Dashboard' } },
            { path: 'progress', component: ProgressComponent, data: { titulo: 'ProgressBar' }},
            { path: 'grafica1', component: Grafica1Component, data: { titulo: 'Gráfica #1' }},
            { path: 'account-setting', component:AccountSettingsComponent,data: { titulo: 'Ajustes de cuenta' }},
            //{ path: '' ,redirectTo:'/dashboard',pathMatch:'full'},
            { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' }},
            { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' }},
            { path: 'perfil', component: PerfilComponent, data: { titulo: 'Perfil de usuario' }},
            { path: 'operadorVuelo', component: OperadorVueloComponent, data: { titulo: 'Operador Vuelo' }},
            { path: 'deteOperadores', component: DeteOperadoresComponent, data: { titulo: 'Determinacion Operadores' }},
            { path: 'usuarios', component: UsuariosComponent, data: { titulo: 'Usuarios' }},
            //Bitacoras
            { path: 'bitOperadorVuelos', component: OperadorVuelosComponent, data: { titulo: 'Bitacora Operador Vuelo' }},
            { path: 'bitDeterOperadores', component: DeterOperadoresComponent, data: { titulo: 'Bitacora Determinacion Operadores' }},

            { path: 'bitVueloGgl', component: VueloXagglComponent, data: { titulo: 'Bitacora Vuelo XA-GGL' }},
            { path: 'bitVueloUyr', component: VueloXauyrComponent, data: { titulo: 'Bitacora Vuelo XA-UYR' }},
            { path: 'bitVueloLfr', component: VueloXalfrComponent, data: { titulo: 'Bitacora Vuelo XA-LFR' }},
            { path: 'bitVueloEfr', component: VueloXaefrComponent, data: { titulo: 'Bitacora Vuelo XA-EFR' }},
            { path: 'bitVueloLrc', component: VueloXalrcComponent, data: { titulo: 'Bitacora Vuelo XA-LRC' }},
            { path: 'graficaDest', component: GraficasComponent, data: { titulo: 'Grafica Destinos' }},
            { path: 'docExcel', component: DocumentosComponent, data: { titulo: 'Documento Excel' }},
            { path: 'sumary', component: SumaryComponent, data: { titulo: 'Sumary' }},
            { path: 'sumaryFinal', component: SumaryFinalComponent, data: { titulo: 'Sumary Final' }},


            { path: 'bitReaVueloGgl', component: VueloXagglRealComponent, data: { titulo: 'Bitacora Real Vuelo XA-GGL' }},
            { path: 'bitReaVueloUyr', component: VueloXauyrRealComponent, data: { titulo: 'Bitacora Real Vuelo XA-UYR' }},
            { path: 'bitReaVueloLfr', component: VueloXalfrRealComponent, data: { titulo: 'Bitacora Real Vuelo XA-LFR' }},
            { path: 'bitReaVueloEfr', component: VueloXaefrRealComponent, data: { titulo: 'Bitacora Real Vuelo XA-EFR' }},
            { path: 'bitReaVueloLrc', component: VueloXalrcRealComponent, data: { titulo: 'Bitacora Real Vuelo XA-LRC' }},

            { path: 'precioAterrizajeMex', component: PrecioAterriajeMexComponent, data: { titulo: 'Precio Aterrizaje México' }},
            { path: 'precioPlataforma', component: PrecioPlataformaComponent, data: { titulo: 'Precio Aterrizaje México' }},
            { path: 'precioCombustible', component: PrecioCombustibleComponent, data: { titulo: 'Precio Aterrizaje México' }},



        ]
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule {}


