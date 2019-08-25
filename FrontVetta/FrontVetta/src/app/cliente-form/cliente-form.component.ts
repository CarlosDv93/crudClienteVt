import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PessoaService } from '../service/pessoa.service';
import { Pessoa } from '../model/pessoa.model';
import { Telefone } from '../model/telefone.model';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css'],
  providers: [PessoaService]
})
export class ClienteFormComponent implements OnInit {

  public formulario: FormGroup;
  public atualizar: Boolean = false;
  public pessoa: Pessoa;
  public cpfMask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
  public cnpjMask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];
  public cepMask = [/\d/, /\d/, '.', /\d/, /\d/ , /\d/, '-', /\d/, /\d/, /\d/];

  constructor(private formBuilder: FormBuilder,
      private pessoaService: PessoaService) {

  }

  ngOnInit() {
    this.configurarFormulario();
  }

  public configurarFormulario() {
    this.formulario = this.formBuilder.group({
      nome: ["", [Validators.required]],
      cep: ["", [Validators.required]],
      email: ["",[ Validators.required, Validators.email]],
      cgc: ["", [Validators.required]],
      status: [true, Validators.required],
      tipo: ["", Validators.required],
      ddd: ["", Validators.maxLength(2)],
      numeroTel: [""]
    });
  }

  public salvarPessoa(){

    console.log("Form: ", this.formulario.value)

    let pessoa : Pessoa;
    let telefone: Telefone;

    pessoa = new Pessoa(this.formulario.value.nome, this.formulario.value.cep, this.formulario.value.email, this.formulario.value.cgc, this.formulario.value.status, this.formulario.value.tipo);
    telefone = new Telefone(this.formulario.value.ddd, this.formulario.value.numeroTel);

    this.pessoaService.salvaPessoa(pessoa)
      .subscribe((retorno : any) => {
        console.log(retorno);
        this.atualizar = true;
      })
  }

}
