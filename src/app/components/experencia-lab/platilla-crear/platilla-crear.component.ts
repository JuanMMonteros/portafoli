import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaServiceService } from 'src/app/servicios/experiencia-service.service';

@Component({
  selector: 'app-platilla-crear',
  templateUrl: './platilla-crear.component.html',
  styleUrls: ['./platilla-crear.component.css']
})
export class PlatillaCrearComponent implements OnInit {
  titulo:String='';
  sobre:String='';
  tiempo:String='';
  constructor(private expService:ExperienciaServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  onCreate():void{
    const exp = new experiencia(this.titulo,this.tiempo,this.sobre);
    this.expService.save(exp).subscribe(_data=>{
      alert("esperiencia Anaida");
      this.router.navigate([''])
    }, err =>{
      alert("fallo");
      this.router.navigate([''])
    })
  }




}
