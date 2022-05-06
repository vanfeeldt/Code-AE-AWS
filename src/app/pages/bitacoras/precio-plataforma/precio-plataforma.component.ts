import { Component, OnInit } from '@angular/core';
import { PrecioPlataforma } from '../../../models/precioPlataforma.model';
import { PreciosPlataformaService } from '../../../services/precios-plataforma.service';

@Component({
  selector: 'app-precio-plataforma',
  templateUrl: './precio-plataforma.component.html',
  styles: [
  ]
})
export class PrecioPlataformaComponent implements OnInit {

  public totalPrecios: number=0;
  public cargando: boolean = true;
  public desde: number = 0;

  public precios:PrecioPlataforma[]=[];



  constructor(private precioPlataforma:PreciosPlataformaService) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(){
    this.cargando=true;
    this.precioPlataforma.cargarPrecios(this.desde).subscribe(
      ({total,precios})=>{
        this.totalPrecios=total;
        this.precios=precios;
        this.cargando=false;
        console.log(precios);
      }
    )

  }

  guardarCambios(precio:PrecioPlataforma){
    console.log(precio);
  }

}
