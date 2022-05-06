import { Component, OnInit } from '@angular/core';
import { DeterminacionOperadores } from 'src/app/models/deterOperadores.models';
import { BusquedasService } from 'src/app/services/busquedas.service';
import { DeterminacionOperadoresService } from 'src/app/services/determinacion-operadores.service';

@Component({
  selector: 'app-deter-operadores',
  templateUrl: './deter-operadores.component.html',
  styles: [
  ]
})
export class DeterOperadoresComponent implements OnInit {

  public totalOperadores: number=0;
  public deterOperadores:DeterminacionOperadores[]=[];
  public deterOperadoresTemp:DeterminacionOperadores[]=[];

  public desde: number = 0;
  public cargando: boolean = true;

  constructor(private detOperadoresServices: DeterminacionOperadoresService,private busquedaService:BusquedasService ) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(){
    this.cargando=true;
    this.detOperadoresServices.cargarDetOperadores(this.desde).subscribe(
      ({total,detOperadores})=>{
        this.totalOperadores=total;
        this.deterOperadores=detOperadores;
        this.deterOperadoresTemp=detOperadores;
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
      return this.deterOperadores=this.deterOperadoresTemp;
    }
    this.busquedaService.buscarCampo('determinacion',termino).subscribe(
      resp=>{
        this.deterOperadores=resp;
      });

      return;
  }


}
