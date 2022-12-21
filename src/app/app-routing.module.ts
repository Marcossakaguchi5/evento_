import { LoginGuard } from './autenticacao/login.guard';
import { AutenticacaoGuard } from './autenticacao/autenticacao.guard';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'home',
  },
  {
    path:'home',
    loadChildren:()=> import('./home/home.module').then((m)=>m.HomeModule),
    canLoad:[LoginGuard]

  },
  {
    path:'eventos',
    loadChildren:()=>
    import('./eventos/eventos.module').then((m)=>m.EventosModule),
    canLoad:[AutenticacaoGuard],
  },
  {
    path:'empresas',
    loadChildren:()=>
    import('./empresas/empresas.module').then((m)=>m.EmpresasModule),
    canLoad:[AutenticacaoGuard],
  },
  {
    path:'evento_convidados',
    loadChildren:()=>
    import('./convidados/convidados.module').then((m)=>m.ConvidadosModule),
    canLoad:[AutenticacaoGuard],
  },
  {
    path:'convidados',
    loadChildren:()=>
    import('./pessoas/pessoas.module').then((m)=>m.PessoasModule),
    canLoad:[AutenticacaoGuard],
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
