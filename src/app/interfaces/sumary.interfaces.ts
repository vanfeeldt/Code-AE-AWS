import { Data } from "@angular/router";

export interface Sumary{
    matricula:string;
    clave:string;
    fecha:Data;
    bitacora:string;
    tramo:number;
    numVuelo:string;
    origen:string;
    destino:string;
    origenDestino:string;
    cliente:string;
    ciclos:number;
    operacion:number;
    identificador:string;
}



export interface CargarSumary{

    sumary:Sumary[];
}


export interface CargarSumaryTotal{

    total:number;
    sumary:Sumary[];
}

