export class proyecto{
    id?:number;
    img:String;
    titulo:String;
    link:String;
    sobre:String;

    constructor(link:String,sobre:String,titulo:String,img:String){
        this.sobre=sobre;
        this.link=link;
        this.titulo=titulo;
        this.img=img;
    }
}