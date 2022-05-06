import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CargaPrecioPlataforma } from '../models/precioPlataforma.model';

const base_url=environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class PreciosPlataformaService {

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

    const url = `${ base_url }/precio/plataforma?desde=${desde}`;
    return this.http.get<CargaPrecioPlataforma>( url, this.headers );        
  }






}
