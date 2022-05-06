import { Component, OnInit } from '@angular/core';
import { PrecioCombustible } from '../../../models/precioCombustible.model';
import { PreciosCombustibleService } from '../../../services/precios-combustible.service';

@Component({
  selector: 'app-precio-combustible',
  templateUrl: './precio-combustible.component.html',
  styles: [
  ]
})
export class PrecioCombustibleComponent implements OnInit {

  public totalPrecios: number=0;
  public cargando: boolean = true;
  public desde: number = 0;

  public precios:PrecioCombustible[]=[];


  constructor(private precioCombustible:PreciosCombustibleService) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(){
    this.cargando=true;
    this.precioCombustible.cargarPrecios(this.desde).subscribe(
      ({total,precios})=>{
        this.totalPrecios=total;
        this.precios=precios;
        this.cargando=false;
        console.log(precios);
      }
    )

  }

  guardarCambios(precio:PrecioCombustible){
    console.log(precio);
  }



}
