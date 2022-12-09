import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';

const API=environment.apiURL;
@Injectable({
  providedIn: 'root'
})
export class ConvidadoService {
private readonly API= `${API}/`

  constructor(
    private http:HttpClient
  ) { }

  edit(id_evento:any,evento:any):Observable<any>{
    return this.http.put<any>(`${API}/evento/${id_evento}`,evento)

  }
 buscar:any=(id_evento:any)=>{
    return this.buscar(`${API}/${id_evento}`)

  }
  delet(id_evento:any){
    return this.http.delete(`${API}/evento/${id_evento}`)
  }
}
