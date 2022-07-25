import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { proyecto } from 'src/app/model/proyecto.model';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-platilla-proyectos',
  templateUrl: './platilla-proyectos.component.html',
  styleUrls: ['./platilla-proyectos.component.css']
})
export class PlatillaProyectosComponent implements OnInit {
  titulo:String='';
  sobre:String='';
  link:String='';
  img:String='';

  constructor(private proService:ProyectoService,private router:Router) { }

  ngOnInit(): void {
  }
  onCreate():void{
    const pro= new proyecto(this.link,this.sobre,this.titulo,this.img);
    this.proService.save(pro).subscribe(_data=>{
      alert("experiencia Add");
      this.router.navigate(['']);
    }, err =>{
      alert("Add");
      this.router.navigate([''])
    });
}

}
