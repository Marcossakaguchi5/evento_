import { EditarEventoComponent } from './../../eventos/editar-evento/editar-evento.component';
import { ConvidadoService } from './../convidado.service';
import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-convidados',
  templateUrl: './lista-convidados.component.html',
  styleUrls: ['./lista-convidados.component.scss']
})

export class ListaConvidadosComponent implements OnInit {
private  id_evento:any;
evento={
  descricao:'',
  data_hora:'',
}
  constructor(
    private modalcontroller:ModalController,
    private route:ActivatedRoute,
    private service:ConvidadoService,
    private router:Router
    ) { this.route.params.subscribe(params=> this.id_evento=params['id_evento'])
 // this.service.buscar(this.id_evento).subscribe((evento:any)=>{
    //this.evento=evento
//  })
}

  ngOnInit(): void {
  }
  // async edit(){
  //   const modal= await this.modalcontroller.create({
  //     component:EditarEventoComponent,
      
  //     componentProps:{this.id_evento,this.evento,
       
  //     },
  //     cssClass:"modal",
  //   });
  //   await modal.present();
     
    
  // }

  delet(){
    console.log(this.id_evento)
    this.service.delet(this.id_evento).subscribe(
      ()=>{
        this.router.navigate(["/eventos"])

      }
    )
  }

}
