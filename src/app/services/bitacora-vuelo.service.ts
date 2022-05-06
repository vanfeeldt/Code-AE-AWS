import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CargaBitVuelo, CargaVuelo } from '../interfaces/cargar-bitVuelos.interfaces';

const base_url=environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class BitacoraVueloService {

  constructor(private http:HttpClient) { }

  get token(): string {
    return localStorage.getItem('token') || '';
  }

  get headers(){
    return{
      headers:{
        'x-token':this.token
      }
    }

  }

  cargarBitVuelo(desde:number=0,vuelo:string){
    const url=`${base_url}/bitacoraVuelo/${vuelo}?desde=${desde}`;
    return this.http.get<CargaBitVuelo>(url,this.headers);
  }

  graficaXaGgl(){
    const url=`${base_url}/destinos/xaggl`;
    return this.http.get<CargaVuelo>(url,this.headers);
    console.log( 'peticion')
  }

  graficaXaEfr(){
    const url=`${base_url}/destinos/xaefr`;
    return this.http.get<CargaVuelo>(url,this.headers);
  }

  graficaXaLfr(){
    const url=`${base_url}/destinos/xalfr`;
    return this.http.get<CargaVuelo>(url,this.headers);
  }

  graficaXaLrc(){
    const url=`${base_url}/destinos/xalrc`;
    return this.http.get<CargaVuelo>(url,this.headers);
  }

  graficaUyr(){
    const url=`${base_url}/destinos/xauyr`;
    return this.http.get<CargaVuelo>(url,this.headers);
  }



}


