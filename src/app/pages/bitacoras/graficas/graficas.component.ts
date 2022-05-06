import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { BitacoraVueloService } from 'src/app/services/bitacora-vuelo.service';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styles: [
  ]
})
export class GraficasComponent implements OnInit {

  public rutas: string[]=[];

  public valores:number[]=[];

  public colors: Color[] = [
    {
      backgroundColor: [
        '#0075ED',
        '#00BAF7',
        '#00E0DB',
        '#00F7AD',
        '#00ED63',
      ]
    }
  ]

  constructor(private graficaServices:BitacoraVueloService ) { }

  ngOnInit(): void {

    this.graficaXaGgl();

  }


  graficaXaGgl(){
    this.graficaServices.graficaXaGgl().
    subscribe(({total,xaggl})=>{
      console.log(xaggl);
    });
  }

  graficaXaEfr(){
    this.graficaServices.graficaXaEfr().
    subscribe(data=>{
      console.log(data);
    });
  }

  graficaXaLfr(){
    this.graficaServices.graficaXaLfr().
    subscribe(data=>{
      console.log(data);
    });
  }

  graficaXaLrc(){
    this.graficaServices.graficaXaLrc().
    subscribe(data=>{
      console.log(data);
    });
  }

  graficaXaUyr(){
    this.graficaServices.graficaUyr().
    subscribe(data=>{
      console.log(data);
    });
  }

  public values:number[]=[];

  public labels1: string[] = [
    'MEX-BOG', 'BOG-MIA', 'MIA-MDE','MDE-MIA','MIA-BOG','MIA-MEX','MEX-JFK','JFK-ORD','ORD-MEX','MEX-LAX','MEX-LAX',
    'GDL-MEX','LAX-MEX','MEX-GDL','GDL-LAX','LAX-GUA','GUA-SJO','SJO-MEX'
  ];


  public data1 = [
    [1,2,,2,2,5,1,1,1,1,5,2,5,3,4,4,1,1],
  ];


  public labels2: string[] = [
    'MEX-BOG', 'BOG-MIA', 'MIA-MDE','MDE-MIA','MIA-BOG','MIA-MEX','MEX-JFK','JFK-ORD','ORD-MEX','MEX-LAX','MEX-LAX',
    'GDL-MEX','LAX-MEX','MEX-GDL','GDL-LAX','LAX-GUA','GUA-SJO','SJO-MEX'
  ];


  public data2 = [
    [5,2,,2,2,1,1,5,1,1,5,5,5,3,4,4,1,1],
  ];

  public labels3: string[] = [
    'MEX-BOG', 'BOG-MIA', 'MIA-MDE','MDE-MIA','MIA-BOG','MIA-MEX','MEX-JFK','JFK-ORD','ORD-MEX','MEX-LAX','MEX-LAX',
    'GDL-MEX','LAX-MEX','MEX-GDL','GDL-LAX','LAX-GUA','GUA-SJO','SJO-MEX'
  ];


  public data3 = [
    [4,6,,2,2,1,1,1,1,4,5,5,5,3,4,4,1,1],
  ];

  public labels4: string[] = [
    'MEX-BOG', 'BOG-MIA', 'MIA-MDE','MDE-MIA','MIA-BOG','MIA-MEX','MEX-JFK','JFK-ORD','ORD-MEX','MEX-LAX','MEX-LAX',
    'GDL-MEX','LAX-MEX','MEX-GDL','GDL-LAX','LAX-GUA','GUA-SJO','SJO-MEX'
  ];


  public data4 = [
    [6,2,,2,2,1,1,3,1,1,5,5,5,3,4,4,1,1],
  ];

  public labels5: string[] = [
    'MEX-BOG', 'BOG-MIA', 'MIA-MDE','MDE-MIA','MIA-BOG','MIA-MEX','MEX-JFK','JFK-ORD','ORD-MEX','MEX-LAX','MEX-LAX',
    'GDL-MEX','LAX-MEX','MEX-GDL','GDL-LAX','LAX-GUA','GUA-SJO','SJO-MEX'
  ];


  public data5 = [
    [5,2,,2,2,1,1,5,1,1,5,5,5,3,4,4,1,1],
  ];

  

}
