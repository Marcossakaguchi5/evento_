import { environment } from './../../environments/environment';
import { UsuarioService } from './usuario/usuario.service';
import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable, tap } from "rxjs";

 const API =environment.apiURL; 
@Injectable({
  providedIn: "root",
})
export class AutenticacaoService {
  constructor(private httpClient: HttpClient,
    private usuarioService:UsuarioService
    ) {}

  autenticar(login: string, senha: string): Observable<HttpResponse<any>> {
    return this.httpClient.post(
      `${API}/login`,
      {
        login: login,
        senha: senha,
      },
       { observe: 'response' }
    ) .pipe(
       tap((res: any)=>{
        console.log(res)
       const authToken= res.body!.token ?? '';
         this.usuarioService.salvaToken(authToken);
         console.log(authToken)
       })
     )
  }
}
