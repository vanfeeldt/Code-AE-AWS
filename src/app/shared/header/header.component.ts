import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent {

  public usuario: Usuario;

  constructor(private usuarioServices:UsuarioService) { 
    this.usuario=usuarioServices.usuario;
  }

  logout(){
    this.usuarioServices.logout();
  }

}
