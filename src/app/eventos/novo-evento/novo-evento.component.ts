import { EventoService } from './../evento.service';
import { CadastrarEventoComponent } from './../../components/evento/cadastrar-evento/cadastrar-evento.component';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Evento } from '../evento';


@Component({
  selector: 'app-novo-evento',
  templateUrl: './novo-evento.component.html',
  styleUrls: ['./novo-evento.component.scss']
})
export class NovoEventoComponent implements OnInit {

  novoEventoForm!:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private EventoService:EventoService,
    private router:Router,
    private modalController:ModalController) { }

  ngOnInit(): void {
    this.novoEventoForm=this.formBuilder.group({
      descricao:[''],
      data_hora:[''],
    
    })
  }
  cadastrar(){
    if(this.novoEventoForm.valid){
      const novoEvento= this.novoEventoForm.getRawValue() as Evento;
      this.EventoService.cadastrarNovoEvento(novoEvento).subscribe(
        ()=>{this.router.navigate(['/eventos']);
      },
      (error:any)=>{
        console.log(error);
      },
      );
    }
  }


adicionar(){
  this.modalController.dismiss();
}
cancelar(){
  this.modalController.dismiss();

}
}
