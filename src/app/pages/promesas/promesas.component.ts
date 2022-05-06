import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //this.gerUsuario();
    this.getUsuarios().then(usuarios=>{
      console.log(usuarios)
    })

    /*const promesa=new Promise((resolve,reject)=>{
      if (false) {
        resolve('Hola Mundo');
      } else {
        reject('Algo salio mal');
      }
    });
    promesa.then((mensaje)=>{
      console.log(mensaje);
    })
    .catch(error=> console.log('Erro en la promesa',error));
    console.log('fin promesa ')*/
  }

  gerUsuario2(){
    fetch('https://reqres.in/api/users').then(
      (resp)=>{
        resp.json().then( body => console.log(body))
      });
  }

  gerUsuario3(){
    fetch('https://reqres.in/api/users')
    .then(resp=>resp.json())
    .then(body=> console.log(body.data));
  }

  gerUsuario4(){
    fetch('https://reqres.in/api/users')
    .then(resp=>resp.json())
    .then(body=> console.log(body.data));
  }

  getUsuarios(){
    const promesa=new Promise((resolve,reject)=>{
      fetch('https://reqres.in/api/users')
      .then(resp=>resp.json())
      .then(body=> resolve(body.data));

    });
    return promesa;

  }

 

}
