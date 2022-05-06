import { Component, OnInit } from '@angular/core';
import { OperadorVuelos } from 'src/app/models/operadorVuelo.models';
import { BusquedasService } from 'src/app/services/busquedas.service';
import{OperadorVuelosService}from '../../../services/operador-vuelos.service'


@Component({
  selector: 'app-operador-vuelos',
  templateUrl: './operador-vuelos.component.html',
  styles: [
  ]
})
export class OperadorVuelosComponent implements OnInit {


  public totalOperadores: number=0;
  public operVuelos:OperadorVuelos[]=[];
  public operVuelostemp:OperadorVuelos[]=[];

  public desde: number = 0;
  public cargando: boolean = true;


  constructor(private opVuelosServices: OperadorVuelosService,private busquedaService:BusquedasService) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(){
    this.cargando=true;
    this.opVuelosServices.cargarOperadores(this.desde).subscribe(
      ({total,operVuelos})=>{
       this.totalOperadores=total;
       this.operVuelos=operVuelos;
       this.operVuelostemp=operVuelos;
       this.cargando=false;
      }
    );
  }

  cambiarPagina(valor:number){
    this.desde+=valor;

    if(this.desde<0){
      this.desde=0;
    }else if(this.desde>=this.totalOperadores){
      this.desde-=valor;
    }
    this.cargarDatos();
  }

  buscar(termino:string){
    if(termino.length===0){
      return this.operVuelos=this.operVuelostemp;
    }
    this.busquedaService.buscarCampo('operadores',termino).subscribe(
      resp=>{
        this.operVuelos=resp;
      });
    return;
  }
  

}
