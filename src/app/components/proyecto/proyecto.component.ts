import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  persona:persona = new persona("","","","","");
  isLogged=false;
  constructor(public personaService:PersonaService, private tokenService:TokenService,private proService:ProyectoService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe( datos => {
      this.persona.proyectos = datos.proyectos;
    });
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{this.isLogged=false;}
  }
  delete(id?:number){
    if(id != undefined){
      this.proService.delete(id).subscribe();
    }
    location.href=location.href;
  }

}
