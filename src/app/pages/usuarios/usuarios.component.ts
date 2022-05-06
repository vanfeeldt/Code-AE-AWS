import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.models';
import { BusquedasService } from 'src/app/services/busquedas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [
  ]
})
export class UsuariosComponent implements OnInit {

  public totalUsuarios: number = 0;
  public usuarios: Usuario[] = [];
  public usuariosTemp: Usuario[] = [];


  public desde: number = 0;
  public cargando: boolean = true;

  constructor(private usuarioServices:UsuarioService,private busquedaService:BusquedasService) { }

  /*ngOnInit(): void {
    this.usuarioServices.cargarUsuarios(0).subscribe( resp=>{
      console.log(resp);
    })
  }*/

   ngOnInit(): void {
   
    this.cargarUsuarios();
  }

  cargarUsuarios(){
    this.cargando=true;
    this.usuarioServices.cargarUsuarios(this.desde).subscribe( ({total,usuarios})=>{
      this.totalUsuarios=total;
      this.usuarios=usuarios;
      this.usuariosTemp=usuarios;
      this.cargando=false;
    })
  }


  cambiarPagina(valor:number){
    this.desde+=valor;

    if(this.desde<0){
      this.desde=0;
    }else if(this.desde>=this.totalUsuarios){
      this.desde-=valor;
    }
    this.cargarUsuarios();

  }

  buscar(termino: string){
  
    if(termino.length===0){
      return this.usuarios=this.usuariosTemp;
    }

    this.busquedaService.buscar('usuarios',termino).subscribe(
      resp=> {
        this.usuarios=resp;
      }
    );

    return;

  }

  eliminarUsuario( usuario: Usuario ) {

    if ( usuario.uid === this.usuarioServices.uid ) {
      return Swal.fire('Error', 'No puede borrarse a si mismo', 'error');
    }
   

    Swal.fire({
      title: '¿Borrar usuario?',
      text: `Esta a punto de borrar a ${ usuario.nombre }`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText: 'Si, borrarlo'
    }).then((result) => {
      if (result.value) {
        
        this.usuarioServices.eliminarUsuario( usuario )
          .subscribe( resp => {
            
            this.cargarUsuarios();
            Swal.fire(
              'Usuario borrado',
              `${ usuario.nombre } fue eliminado correctamente`,
              'success'
            );
            
          });

      }
    })

    return;
  }


  cambiarRole(usuario:Usuario){
    this.usuarioServices.guardarUsuario(usuario).subscribe(resp=>{
      console.log(resp);
    })

  }



}


