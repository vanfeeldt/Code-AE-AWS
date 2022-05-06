import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { OperadorVuelos } from '../models/operadorVuelo.models';
import { Usuario } from '../models/usuario.models';



const base_url=environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class BusquedasService {

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

  private transformarUsuarios(resultado:any[]):Usuario[]{
    
    return resultado.map(user => new Usuario(user.nombre, user.email, '', user.img, user.google, user.role, user.uid ) );
  }

  private trasnformarOperadores(resultado:any[]):OperadorVuelos[]{
    return resultado.map(resp=>new OperadorVuelos(resp.vuelo,resp.origen,resp.destino,resp.cliente,resp.clave,resp.clase));
  }

  buscar(tipo:'usuarios'|'operadores'|'determinacion',
  termino:string 
  ){

    const url = `${ base_url }/todo/coleccion/${ tipo }/${termino}`;
    return this.http.get<any[]>( url, this.headers )
    .pipe(
      map((resp: any)=>{

        switch (tipo) {
          case 'usuarios':
            return this.transformarUsuarios(resp.resultados);
        
          default:
            return[];
        }

        }
      )
    );
  }


  buscarCampo(tipo:'usuarios'|'operadores'|'determinacion',
  termino:string 
  ){
    const url = `${ base_url }/todo/coleccion/${ tipo }/${termino}`;
    return this.http.get<any[]>( url, this.headers )
    .pipe(
      map((resp: any)=>resp.resultados)
    );
  }


  buscarVuelo(tipo:'xaEfr'|'xaGgl'|'xaLfr'|'xaLrc' |'xaUyr',
  termino:string 
  ){
    const url = `${ base_url }/todo/coleccionVuelos/${ tipo }/${termino}`;
    return this.http.get<any[]>( url, this.headers )
    .pipe(
      map((resp: any)=>resp.resultados)
    );
  }

}
