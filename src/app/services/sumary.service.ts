import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import{CargarSumary,Sumary,CargarSumaryTotal} from '../interfaces/sumary.interfaces';

const base_url=environment.base_url;


@Injectable({
  providedIn: 'root'
})
export class SumaryService {

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

  cargarSumary(){
    const url=`${base_url}/sumary`;
    return this.http.get<CargarSumary>(url,this.headers);

  }

  cargarSumaryTotal(){
    const url=`${base_url}/sumary/total`;
    return this.http.get<CargarSumaryTotal>(url,this.headers);

  }


}
