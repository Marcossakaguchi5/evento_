import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';

const API=environment.apiURL;
@Injectable({
  providedIn: 'root'
})
export class ConvidadoService {
private readonly API= `${API}/`

  constructor() { }
}
