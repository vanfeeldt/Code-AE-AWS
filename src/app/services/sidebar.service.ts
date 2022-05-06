import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'Bitacoras Estimado',
      icono: 'mdi mdi-file-chart',
      submenu: [
        
        { titulo: 'Bitacora Determinación Operadores', url: 'bitDeterOperadores' },
        { titulo: 'Bitacora Operadores Vuelo', url: 'bitOperadorVuelos' },
        { titulo: 'Bitacora Vuelo XA-EFR', url: 'bitVueloEfr' },
        { titulo: 'Bitacora Vuelo XA-GGL', url: 'bitVueloGgl' },
        { titulo: 'Bitacora Vuelo XA-LFR', url: 'bitVueloLfr' },
        { titulo: 'Bitacora Vuelo XA-LRC', url: 'bitVueloLrc' },
        { titulo: 'Bitacora Vuelo XA-UYR', url: 'bitVueloUyr' },
        { titulo: 'Documento Excel', url: 'docExcel' },
        { titulo: 'Grafica Destinos', url: 'graficaDest' },
        { titulo: 'Sumary Bitacoras', url: 'sumary' },
        { titulo: 'Sumary Bitacoras Concentrado', url: 'sumaryFinal' },
        
        
      ]
    },
    {
      titulo: 'Bitacoras Real',
      icono: 'mdi mdi-poll-box',
      submenu: [
        { titulo: 'Bitacora Vuelo XA-EFR', url: 'bitReaVueloEfr' },
        { titulo: 'Bitacora Vuelo XA-GGL', url: 'bitReaVueloGgl' },
        { titulo: 'Bitacora Vuelo XA-LFR', url: 'bitReaVueloLfr' },
        { titulo: 'Bitacora Vuelo XA-LRC', url: 'bitReaVueloLrc' },
        { titulo: 'Bitacora Vuelo XA-UYR', url: 'bitReaVueloUyr' },
       
      ]
    },
    {
      titulo: 'Configuraciones',
      icono: 'mdi mdi-desktop-mac',
      submenu: [
        { titulo: 'Main', url: '/' },
        { titulo: 'Gráficas', url: 'grafica1' },
        { titulo: 'rxjs', url: 'rxjs' },
        { titulo: 'Promesas', url: 'promesas' },
        { titulo: 'ProgressBar', url: 'progress' },
        { titulo: 'Operadores Vuelo', url: 'operadorVuelo' },
        { titulo: 'Usuarios', url: 'usuarios' },
        { titulo: 'Determinación Operadores', url: 'deteOperadores' },
      ]
    },

    {
      titulo: 'Divisas',
      icono: 'mdi mdi-cash-usd',
      submenu: [
       
      ]
    },

    {
      titulo: 'Fuell',
      icono: 'mdi mdi-glass-mug',
      submenu: [
       
      ]
    },
    {
      titulo: 'Precios',
      icono: 'mdi mdi-coin',
      submenu: [
        { titulo: 'Precio Aterrizaje México', url: 'precioAterrizajeMex' },
        { titulo: 'Precio Plataforma', url: 'precioPlataforma' },
        { titulo: 'Precio Combustible', url: 'precioCombustible' },
      ]
    },
    
  ];

  constructor() { }
}
