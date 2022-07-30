import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'https://jmontportafolio.herokuapp.com/personas/';

  constructor(private http:HttpClient) { }
  public getPersona(): Observable<persona>{
    return this.http.get<persona>(this.URL + "traer/perfil");
  }
  public editSobre(sobre_mi:String,per:persona):Observable<any>{
    return this.http.put(this.URL+ "editar/1?sobre_mi="+sobre_mi ,per)
  }
}
