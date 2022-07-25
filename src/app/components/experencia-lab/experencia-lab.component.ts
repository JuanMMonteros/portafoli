import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { ExperienciaServiceService } from 'src/app/servicios/experiencia-service.service';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-experencia-lab',
  templateUrl: './experencia-lab.component.html',
  styleUrls: ['./experencia-lab.component.css']
})
export class ExperenciaLabComponent implements OnInit {
  persona:persona = new persona("","","","","");
  isLogged =false;

  constructor(public personaService:PersonaService,private tokenService:TokenService,private experienciaService:ExperienciaServiceService) { }


  ngOnInit(): void {
    this.personaService.getPersona().subscribe( datos =>{
      this.persona.exp= datos.exp;
    });
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{this.isLogged=false;}
    
  }
  delete(id?:number){
    if(id != undefined){
      this.experienciaService.delete(id).subscribe(_data=>{
        
      })
    }
    location.href=location.href;

  }

}
