import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { skill } from '../model/skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  URLH='http://localhost:8080/HardSkill/'
  URLS='http://localhost:8080/SoftSkill/'

  constructor(private http:HttpClient) { }
  public save(skill:skill,cual:boolean):Observable<any>{
    let enlace:String=cual?this.URLH:this.URLS;
    return this.http.post<any>(enlace + 'crear/1',skill);
  }
  public delete(id:number,cual:boolean):Observable<any>{
    let enlace:String=cual?this.URLH:this.URLS;
    return this.http.delete(enlace  + 'borrar/'+`${id}`);
  }

}
