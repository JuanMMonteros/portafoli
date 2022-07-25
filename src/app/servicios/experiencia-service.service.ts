import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { experiencia } from '../model/experiencia.model';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaServiceService {
  URL='http://localhost:8080/Experiencia/'

  constructor(private http:HttpClient) { }
  public save(exp:experiencia):Observable<any>{
    return this.http.post<any>(this.URL + 'crear/1',exp);
  }
  public delete(id:number):Observable<any>{

    return this.http.delete(this.URL + 'borrar/'+`${id}`)
  }
}
