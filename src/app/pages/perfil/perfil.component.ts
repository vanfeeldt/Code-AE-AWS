import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

import { Usuario } from '../../models/usuario.models';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styles: [
  ]
})
export class PerfilComponent implements OnInit {


  public perfilForm!: FormGroup;
  public usuario!: Usuario;
  public imagenSubir!: File;
  public imgTemp: any = null;

  


  constructor( private fb: FormBuilder,
    private usuarioService: UsuarioService) {
      this.usuario = usuarioService.usuario;
    }

    ngOnInit(): void {

      this.perfilForm = this.fb.group({
        nombre: [ this.usuario.nombre , Validators.required ],
        email: [ this.usuario.email, [ Validators.required, Validators.email ] ],
      });
    }

  actualizarPerfil(){
    console.log(this.perfilForm.value);
    this.usuarioService.actualizarPerfil(this.perfilForm.value)
          .subscribe(resp=>{
            console.log(resp);
          });
  }

}
