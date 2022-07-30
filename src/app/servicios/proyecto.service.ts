import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {proyecto} from '../model/proyecto.model'

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  URL='https://jmontportafolio.herokuapp.com/Proyectos/'

  constructor(private http:HttpClient) { }
  public save(pro:proyecto):Observable<any>{
    return this.http.post<any>(this.URL + 'crear/1',pro);
  }
  public delete(id:number):Observable<any>{
    return this.http.delete(this.URL + 'borrar/'+`${id}`);
  }
}
