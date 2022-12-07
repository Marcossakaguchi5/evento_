import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-convidados',
  templateUrl: './lista-convidados.component.html',
  styleUrls: ['./lista-convidados.component.scss']
})
export class ListaConvidadosComponent implements OnInit {

  constructor(private modalcontroller:ModalController) { }

  ngOnInit(): void {
  }

}
