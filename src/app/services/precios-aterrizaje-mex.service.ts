import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CargaPrecioAterrizajeMex, PrecioAterrizajeMex } from '../models/precioAterrizajeMex.models';
import { map } from 'rxjs/operators';

const base_url=environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class PreciosAterrizajeMexService {

  constructor(private http:HttpClient,private router:Router,private ngZone:NgZone) { }

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

  cargarPrecios(desde:number=0) {

    const url = `${ base_url }/precio/aterrizajeMex?desde=${desde}`;
    return this.http.get<CargaPrecioAterrizajeMex>( url, this.headers );        
  }


crearPrecios(precio :PrecioAterrizajeMex) {

    const url = `${ base_url }/precio/aterrizajeMex`;
    return this.http.post( url,precio,this.headers );        
  }

  actualizarPrecios(uid:string,precio :PrecioAterrizajeMex) {

    const url = `${ base_url }/precio/aterrizajeMex/${uid}`;
    return this.http.put( url,precio,this.headers );        
  }

  eliminarPrecios(uid:string) {

    const url = `${ base_url }/precio/aterrizajeMex/${uid}`;
    return this.http.delete( url,this.headers );        
  }

}
