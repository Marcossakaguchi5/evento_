import { EditarEmpresaComponent } from "./../editar-empresa/editar-empresa.component";
import { Router } from "@angular/router";
import { EmpresaService } from "./../empresa.service";
import { NovaEmpresaComponent } from "./../nova-empresa/nova-empresa.component";

import { Component, OnInit } from "@angular/core";
import { Empresa } from "../empresa";

import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-lista-empresas",
  templateUrl: "./lista-empresas.component.html",
  styleUrls: ["./lista-empresas.component.scss"],
})
export class ListaEmpresasComponent implements OnInit {
  listaEmpresa: Empresa[] = [];

  constructor(
    private service: EmpresaService,
    private modalController: ModalController,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.service.listar().subscribe((event) => {
      this.listaEmpresa = event.result as Empresa[];
      console.log(this.listaEmpresa);
    });
  }
  async add() {
    const modal = await this.modalController.create({
      component: NovaEmpresaComponent,
      cssClass: "modal",
    });
    await modal.present();
  }
  async edit(id_empresa: any, empresa: any) {
    console.log(id_empresa, empresa);
    const modal = await this.modalController.create({
      component: EditarEmpresaComponent,
      componentProps: { id_empresa, empresa },
      cssClass: "modal",
    });
    await modal.present();
  }

  delet(id_empresa: any) {
    this.service.delet(id_empresa).subscribe(
      () => {
        this.router.navigate(["/empresas"]);
      },
      (error) => console.log(error)
    );
  }
}
