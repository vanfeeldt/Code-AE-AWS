import { BitacoraVuelo, RutaVuelo } from "./bitVuelo.interfaces";


export interface CargaBitVuelo{
    total:number;
    bitVuelos: BitacoraVuelo[];
}


export interface CargaVuelo{
    total:number;
    xaggl: RutaVuelo[];
}


