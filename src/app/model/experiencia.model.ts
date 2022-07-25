export class experiencia{
    id?:number;
    titulo:String;
    sobre:String;
    tiempo:String;

    constructor(titulo:String,tiempo:String,sobre:String){
        this.sobre=sobre;
        this.tiempo=tiempo;
        this.titulo=titulo;
    }


}