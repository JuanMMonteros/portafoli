import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {
  persona:persona = new persona("","","","","");
  isLogged =false;
  edit:boolean=false;
  sobre_mi:String="";

  constructor(public personaService:PersonaService, private tokenService:TokenService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => (this.persona = data));
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{this.isLogged=false;} 
  }
  editar():void{
    this.edit=true;

  }
  crear():void{
    this.edit=false;
    this.personaService.editSobre(this.sobre_mi,this.persona).subscribe();
    location.href=location.href;
  }

}
