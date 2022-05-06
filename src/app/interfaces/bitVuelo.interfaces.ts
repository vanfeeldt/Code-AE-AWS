

export interface BitacoraVuelo{
    bitacora:string;
    operacion:string;
    leg:number;
    fecha:Date;
    flt:string;
    from:string;
    to:string;
    fuelGal:number;
    fuelLt:number;

}

export interface RutaVuelo{
    ruta:string;
    acumulado: number;
}