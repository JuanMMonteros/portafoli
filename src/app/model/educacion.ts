export class educacion{
    id?:number;
    titulo:String;
    sobre:String;
    tiempo:String;
    img:String;

    constructor(titulo:String,tiempo:String,sobre:String,img:String){
        this.sobre=sobre;
        this.tiempo=tiempo;
        this.titulo=titulo;
        this.img=img;
    }


}