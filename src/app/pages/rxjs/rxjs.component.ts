import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { retry, take, map ,filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {


  public intervalSubs:Subscription | undefined;

  constructor() {

    /*this.retornaObservable().pipe(
      retry(1)
    ).subscribe(
      valor => console.log('Subs:', valor),
      error => console.log('Error: ', error),
      () => console.log('Obs Completado')
    );*/

    this.intervalSubs=this.retornaIntervalo().subscribe(console.log)
  }
  ngOnDestroy(): void {
    this.intervalSubs?.unsubscribe();
  }

  retornaIntervalo(): Observable<number> {
    return interval(400).pipe(
      
      //take(10)toma los primeros 10  valores
      map(valor => valor + 1 // RETURN 0=>1
      ),
      filter(valor=>(valor%2===0)?true:false),// funciona con true o false
      //take(10)// hasta que sean 10 valores
    );

  }




  retornaObservable(): Observable<number> {
    let i = -1;

    const obs$ = new Observable<number>(observer => {

      const intervalo = setInterval(() => {
        i++;
        observer.next(i);
        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }
        if (i === 2) {
          // i = 0;
          observer.error('i llego al valor 2');
        }


      }, 1000)

    });
    return obs$;
  }

}
