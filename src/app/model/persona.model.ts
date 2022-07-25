import { educacion } from "./educacion";
import { experiencia } from "./experiencia.model";
import { proyecto } from "./proyecto.model";
import { skill } from "./skill.model";

export class persona{
    id?:number;
    nombre?:String;
    apellido?:String;
    img?:String
    profesion?:String;
    sobre_mi:String;
    exp?:experiencia[];
    educacion?:educacion[];
    hard?:skill[];
    soft?:skill[];
    proyectos?:proyecto[];

    constructor(nombre:String,apellido:String,img:String,profesion:String,sobre_mi:String){
        this.nombre=nombre;
        this.apellido=apellido;
        this.img=img;
        this.profesion=profesion;
        this.sobre_mi=sobre_mi;
    }
}