import { EditarEventoComponent } from './editar-evento/editar-evento.component';
import { ComponentsModule } from './../components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CadastrarEventoComponent } from './../components/evento/cadastrar-evento/cadastrar-evento.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventosRoutingModule } from './eventos-routing.module';
import { ListaEventosComponent } from './lista-eventos/lista-eventos.component';

import { NovoEventoComponent } from './novo-evento/novo-evento.component';

@NgModule({
  declarations: [
    ListaEventosComponent,
    CadastrarEventoComponent,
EditarEventoComponent,

    NovoEventoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    EventosRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
  
  
   
   
  ]
})
export class EventosModule { }
