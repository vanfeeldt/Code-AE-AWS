import { Component, OnInit } from '@angular/core';
import { PrecioAterrizajeMex } from 'src/app/models/precioAterrizajeMex.models';
import Swal from 'sweetalert2';
import { PreciosAterrizajeMexService } from '../../../services/precios-aterrizaje-mex.service';

@Component({
  selector: 'app-precio-aterriaje-mex',
  templateUrl: './precio-aterriaje-mex.component.html',
  styles: [
  ]
})
export class PrecioAterriajeMexComponent implements OnInit {


  public totalPrecios: number=0;
  public precios:PrecioAterrizajeMex[]=[];
  public preciosTemp:PrecioAterrizajeMex[]=[];
  public cargando: boolean = true;
  public desde: number = 0;

  constructor(private precioAterrizajeMex : PreciosAterrizajeMexService) { }

  ngOnInit(): void {
    this.cargarDatos();
  }


  cargarDatos(){
    this.cargando=true;
    this.precioAterrizajeMex.cargarPrecios(this.desde).subscribe(
      ({total,precios})=>{
        this.totalPrecios=total;
        this.precios=precios;
        this.preciosTemp=precios;
        this.cargando=false;
    console.log(precios);
    });
  }

  cambiarPagina(valor:number){
    this.desde+=valor;

    if(this.desde<0){
      this.desde=0;
    }else if(this.desde>=this.totalPrecios){
      this.desde-=valor;
    }
    this.cargarDatos();
  }

  guardarCambios(precio:PrecioAterrizajeMex){
    this.precioAterrizajeMex.actualizarPrecios(precio.uid,precio).subscribe(
      resp=>{
        Swal.fire('Actualizado',precio.aterrizaje,'success');
      }
    )
    console.log(precio);
  }

  eliminarCambios(precio:PrecioAterrizajeMex){
    this.precioAterrizajeMex.eliminarPrecios(precio.uid).subscribe(
      resp=>{
        this.cargarDatos();
        Swal.fire('Eliminado ',precio.aterrizaje,'success');
      }
    )
    console.log(precio);
  }

  async abrirModal(){
    const  valor  = await Swal.fire({
      input: 'text',
      inputLabel: 'URL address',
      inputPlaceholder: 'Enter the URL'
    })
    
    
  }

}
