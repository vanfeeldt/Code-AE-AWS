import {Component, OnInit} from '@angular/core';
import { BitacoraVuelo } from 'src/app/interfaces/bitVuelo.interfaces';
import { BitacoraVueloService } from 'src/app/services/bitacora-vuelo.service';
import { BusquedasService } from 'src/app/services/busquedas.service';

@Component({
  selector: 'app-vuelo-xaefr-real',
  templateUrl: './vuelo-xaefr-real.component.html',
  styles: [
  ]
})
export class VueloXaefrRealComponent implements OnInit {

  public totalVuelos: number=0;
  public xaefr:BitacoraVuelo[]=[];
  public xaefrTemp:BitacoraVuelo[]=[];

  public desde: number = 0;
  public cargando: boolean = true;

  constructor(private bitacoraVueloServices:BitacoraVueloService,private busquedaService:BusquedasService) { }

  ngOnInit(): void {

    this.cargarDatos();
  }


  cargarDatos(){
    this.cargando=true;
    this.bitacoraVueloServices.cargarBitVuelo(this.desde,'efr').subscribe(
      ({total,bitVuelos})=>{
        this.totalVuelos=total;
        this.xaefr=bitVuelos;
        this.xaefrTemp=bitVuelos;
        this.cargando=false;
      }
    );
  }


  cambiarPagina(valor:number){

    this.desde+=valor;

    if(this.desde<0){
      this.desde=0;
    }else if(this.desde>=this.totalVuelos){
      this.desde-=valor;
    }
    this.cargarDatos();
  }

  buscar(termino: string){
  
    if(termino.length===0){
      return this.xaefr=this.xaefrTemp;
    }

    this.busquedaService.buscarVuelo('xaEfr',termino).subscribe(
      resp=> {
        this.xaefr=resp;
      }
    );

    return;

  }


}
