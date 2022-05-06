export class PrecioPlataforma{

    constructor(
        public plataforma:string,
        public match:string,
        public nacInt:string,
        public horario:string,
        public precio:number,
        public uid?:string,
    ){}

}

export interface CargaPrecioPlataforma{
    total:number;
    precios: PrecioPlataforma[];
}