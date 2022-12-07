import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { PessoaService } from './../pessoa.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-nova-pessoa',
  templateUrl: './nova-pessoa.component.html',
  styleUrls: ['./nova-pessoa.component.scss']
})
export class NovaPessoaComponent implements OnInit {

  novaPessoaForm!:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private pessoaService:PessoaService,
    private router:Router,
    private modalController:ModalController

  ) { }

  ngOnInit(): void {
    this.novaPessoaForm=this.formBuilder.group({
      nome:[''],
      cargo :[''],
      id_empresa:[''],
      email:[''],
      telefone:[''],
    })
  }
  cadastrar(){
    if(this.novaPessoaForm.valid){
      const novaPessoa=this.novaPessoaForm.getRawValue() as Pessoa;
      this.pessoaService.cadastrarNovaPessoa(novaPessoa).subscribe(
        ()=>{this.router.navigate(['/convidados']);
      },
      (error)=>{
        console.log(error)
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
