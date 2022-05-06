import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

constructor(private usuarioServices:UsuarioService, private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    
      //console.log('CanActivate');
      //return true;
    return this.usuarioServices.validarToken().pipe(
      tap(estaAutenticado=>{

        if(!estaAutenticado){
          this.router.navigateByUrl('/login');
        }

      })
    )
  }
  
}
