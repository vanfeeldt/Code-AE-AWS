import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CargaPrecioCombustible } from '../models/precioCombustible.model';

const base_url=environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class PreciosCombustibleService {

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

    const url = `${ base_url }/precio/combustible?desde=${desde}`;
    return this.http.get<CargaPrecioCombustible>( url, this.headers );        
  }





}
