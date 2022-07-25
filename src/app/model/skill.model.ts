export class skill{
    id?:number;
    titulo?:String;
    porsentaje:number;

    constructor(porsentaje:number,titulo:String){
        this.porsentaje=porsentaje
        this.titulo=titulo;
    }


}