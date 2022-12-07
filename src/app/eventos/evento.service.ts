import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Evento } from './evento';


const API= environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  private readonly API=`${API}/evento`;
  constructor(private http:HttpClient) { }
  listar():Observable<any>{
    return this.http.get(this.API)

  }

  cadastrarNovoEvento(novoEvento:Evento){
    return this.http.post(`${API}/evento/1`,novoEvento)
  }
}
