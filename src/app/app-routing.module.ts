
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

  },
  {
    path:'eventos',
    loadChildren:()=>
    import('./eventos/eventos.module').then((m)=>m.EventosModule)
  },
  {
    path:'empresas',
    loadChildren:()=>
    import('./empresas/empresas.module').then((m)=>m.EmpresasModule)
  },
  {
    path:'evento_convidados',
    loadChildren:()=>
    import('./convidados/convidados.module').then((m)=>m.ConvidadosModule)
  },
  {
    path:'convidados',
    loadChildren:()=>
    import('./pessoas/pessoas.module').then((m)=>m.PessoasModule)
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
