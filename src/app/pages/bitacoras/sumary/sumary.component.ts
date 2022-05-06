import { Component, OnInit } from '@angular/core';
import {Sumary}from 'src/app/interfaces/sumary.interfaces';
import{ SumaryService }from 'src/app/services/sumary.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sumary',
  templateUrl: './sumary.component.html',
  styles: [
  ]
})
export class SumaryComponent implements OnInit {

  public cargando: boolean = true;
  public totalSumary: number=0;
  public sumaryData:Sumary[]=[];
  public SumaryTem:Sumary[]=[];

  constructor(private sumaryServices:SumaryService) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(){
    this.cargando=true;
    this.sumaryServices.cargarSumaryTotal().subscribe(
      ({total,sumary})=>{
        this.totalSumary=total;
        this.sumaryData=sumary;
        this.SumaryTem=sumary;
        this.cargando=false;
        console.log(sumary);
      }
    );

  }





}
