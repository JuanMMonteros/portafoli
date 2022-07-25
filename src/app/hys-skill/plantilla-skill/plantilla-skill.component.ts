import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SkillService } from 'src/app/servicios/skill.service';
import { skill } from 'src/app/model/skill.model';

@Component({
  selector: 'app-plantilla-skill',
  templateUrl: './plantilla-skill.component.html',
  styleUrls: ['./plantilla-skill.component.css']
})
export class PlantillaSkillComponent implements OnInit {
  titulo:String='';
  porsentaje:number=0;
  value:String='';

  constructor(private skillService:SkillService,private router:Router) { }
  onCreate():void{
    const skil = new skill(this.porsentaje,this.titulo);
    let cual:boolean = this.value=="true"?true:false;
    this.skillService.save(skil,cual).subscribe(_data=>{
      alert("experiencia Add");
      this.router.navigate(['']);
    }, err =>{
      alert("Add");
      this.router.navigate([''])
    });
}

  ngOnInit(): void {
  }

}
