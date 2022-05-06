import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CargaDetOperadores } from '../interfaces/cargar-detOperadores.interfaces';

const base_url=environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class DeterminacionOperadoresService {

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

  cargarDetOperadores(desde:number=0){
    const url=`${base_url}/detOperador?desde=${desde}`;
    return this.http.get<CargaDetOperadores>(url,this.headers);
  }

}
