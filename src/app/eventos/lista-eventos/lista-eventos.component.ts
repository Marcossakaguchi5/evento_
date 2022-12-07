import { EventoService } from './../evento.service';
import { NovoEventoComponent } from './../novo-evento/novo-evento.component';
import { Component, OnInit } from '@angular/core';
import { ModalController } from "@ionic/angular";
import { Evento } from '../evento';


@Component({
  selector: 'app-lista-eventos',
  templateUrl: './lista-eventos.component.html',
  styleUrls: ['./lista-eventos.component.scss']
})
export class ListaEventosComponent implements OnInit {

  listaEvento:Evento[]=[];
  constructor(
    private modalController:ModalController,
    private service:EventoService
    ) { }

  ngOnInit(): void {
    this.service.listar().subscribe((event)=>{
      this.listaEvento=event.result as Evento[]
      console.log(this.listaEvento)
    })
  }
async add(){
  const modal = await this.modalController.create({
    component:NovoEventoComponent,
    cssClass:'modal'
    // initialBreakpoint:1,
    // breakpoints:[0,0.4,5,1]

  });

  await modal.present();

  const res=await modal.onDidDismiss();
}


}
