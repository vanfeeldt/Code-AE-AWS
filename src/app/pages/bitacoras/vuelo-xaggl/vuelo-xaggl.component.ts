import { Component, OnInit } from '@angular/core';
import { BitacoraVuelo } from 'src/app/interfaces/bitVuelo.interfaces';
import { BitacoraVueloService } from 'src/app/services/bitacora-vuelo.service';
import { BusquedasService } from 'src/app/services/busquedas.service';

@Component({
  selector: 'app-vuelo-xaggl',
  templateUrl: './vuelo-xaggl.component.html',
  styles: [
  ]
})
export class VueloXagglComponent implements OnInit {

  public totalVuelos: number=0;
  public xaggl:BitacoraVuelo[]=[];
  public xagglTemp:BitacoraVuelo[]=[];

  public desde: number = 0;
  public cargando: boolean = true;

  constructor(private bitacoraVueloServices:BitacoraVueloService,private busquedaService:BusquedasService) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(){
    this.cargando=true;
    this.bitacoraVueloServices.cargarBitVuelo(this.desde,'ggl').subscribe(
      ({total,bitVuelos})=>{
        this.totalVuelos=total;
        this.xaggl=bitVuelos;
        this.xagglTemp=bitVuelos;
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
      return this.xaggl=this.xagglTemp;
    }

    this.busquedaService.buscarVuelo('xaGgl',termino).subscribe(
      resp=> {
        this.xaggl=resp;
      }
    );

    return;

  }

}
