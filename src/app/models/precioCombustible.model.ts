export class PrecioCombustible{

    constructor(
        public match:string,
        public combustible:string,
        public dia:number,
        public vigenciaInicio:Date,
        public vigenciaFin:Date,
        
        public aeropuerto:string,
        public nombreAeropuerto:string,
        public precioConDescuento:number,
        public precioSinDescuento:number,
        
        public precioGalMex:number,
        public precioDolar:number,

        public uid?:string,
    ){}

}

export interface CargaPrecioCombustible{
    total:number;
    precios: PrecioCombustible[];
}