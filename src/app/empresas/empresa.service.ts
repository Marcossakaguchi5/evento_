import { Observable } from "rxjs";
import { environment } from "./../../environments/environment.prod";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empresa } from "./empresa";

const API = environment.apiURL;

@Injectable({
  providedIn: "root",
})
export class EmpresaService {
  private readonly API = `${API}/empresa`;
  constructor(private http: HttpClient) {}

  listar(): Observable<any> {
    return this.http.get(this.API);
  }

  cadastrarNovaEmpresa(novaEmpresa: Empresa) {
    return this.http.post(`${API}/empresa`, novaEmpresa);
  }

  edit(id_empresa: any, editaEmpresa: any): Observable<any> {
    return this.http.put<any>(`${API}/empresa/${id_empresa}`, editaEmpresa);
  }

  delet(id_empresa: any) {
    return this.http.delete(`${API}/empresa/${id_empresa}`);
  }
}
