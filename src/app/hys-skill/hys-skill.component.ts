import { Component, OnInit } from '@angular/core';
import { persona } from '../model/persona.model';
import { PersonaService } from '../servicios/persona.service';
import { SkillService } from '../servicios/skill.service';
import { TokenService } from '../servicios/token.service';


@Component({
  selector: 'app-hys-skill',
  templateUrl: './hys-skill.component.html',
  styleUrls: ['./hys-skill.component.css']
})
export class HysSkillComponent implements OnInit {
  persona:persona = new persona("","","","","");
  isLogged=false;

  constructor(public personaService:PersonaService, private tokenService:TokenService,private skillService:SkillService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe( datos => {
      this.persona.hard = datos.hard;
      this.persona.soft = datos.soft;
    });
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{this.isLogged=false;}
  }
  delete(id?:number,cual?:boolean){
    if(id != undefined){
      this.skillService.delete(id,cual).subscribe();
    }
    location.href=location.href;
  }

}
