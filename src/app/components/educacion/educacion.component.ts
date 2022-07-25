import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  
  persona:persona = new persona("","","","","");
  isLogged=false;

  constructor(public personaService:PersonaService, private tokenService:TokenService,private eduService:EducacionService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe( dato => {
      this.persona.educacion = dato.educacion;
    });
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{this.isLogged=false;}
    

  }
  delete(id?:number){
    if(id != undefined){
      this.eduService.delete(id).subscribe();
    }
    location.href=location.href;
  }

}
