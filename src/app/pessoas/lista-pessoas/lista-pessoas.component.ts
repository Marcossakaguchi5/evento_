import { PessoaService } from './../pessoa.service';
import { EditarPessoaComponent } from './../editar-pessoa/editar-pessoa.component';
import { NovaPessoaComponent } from './../nova-pessoa/nova-pessoa.component';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

import { Pessoa } from "../pessoa";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-lista-pessoas",
  templateUrl: "./lista-pessoas.component.html",
  styleUrls: ["./lista-pessoas.component.scss"],
})
export class ListaPessoasComponent implements OnInit {
  listaPessoa: Pessoa[] = [];
  constructor(
    private service: PessoaService,
    private modalController:ModalController,
    private router:Router) {}

  ngOnInit(): void {
    this.service.listar().subscribe((event) => {
      this.listaPessoa = event.result as Pessoa[];
      console.log(this.listaPessoa);
    });
  }

  async add() {
    const modal = await this.modalController.create({
      component:NovaPessoaComponent,
      cssClass:"modal",
    });
    await modal.present();
  }

  async edit(
    id_convidado:any,
    nome:any,
    cargo:any,
    empresa:any,
    email:any,
    telefone:any
    ){
 
      const modal=await this.modalController.create({
        component:EditarPessoaComponent,
        componentProps:{
          id_convidado,
          nome,
          cargo,
          empresa,
          email,
          telefone
        },
        cssClass:"modal",
      });
      await modal.present();
    }
  delet(id_convidado:any){
    this.service.delet(id_convidado).subscribe(
      ()=>{
        this.router.navigate(["/convidados"]);
      },
      (error) =>console.log(error)
    );

  }
}