import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-platilla-edu',
  templateUrl: './platilla-edu.component.html',
  styleUrls: ['./platilla-edu.component.css']
})
export class PlatillaEduComponent implements OnInit {
  titulo:String='';
  sobre:String='';
  tiempo:String='';
  img:String='';

  constructor(private eduService:EducacionService,private router:Router) { }

  ngOnInit(): void {
  }
  onCreate():void{
    const edu = new educacion(this.titulo,this.tiempo,this.sobre,this.img);
    this.eduService.save(edu).subscribe(_data=>{
      alert("experiencia Add");
      this.router.navigate(['']);
    }, err =>{
      alert("Add");
      this.router.navigate([''])
    });
}
}
