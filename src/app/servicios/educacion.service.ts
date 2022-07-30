import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { educacion } from '../model/educacion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  URL='https://jmontportafolio.herokuapp.com/Educacion/'

  constructor(private http:HttpClient) { }
  public save(edu:educacion):Observable<any>{
    return this.http.post<any>(this.URL + 'crear/1',edu);
  }
  public delete(id:number):Observable<any>{
    return this.http.delete(this.URL + 'borrar/'+`${id}`);
  }
}
