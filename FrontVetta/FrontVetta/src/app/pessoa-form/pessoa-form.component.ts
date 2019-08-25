import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../service/pessoa.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Pessoa } from '../model/pessoa.model';
import { Telefone } from '../model/telefone.model';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css'],
  providers: [PessoaService]
})
export class PessoaFormComponent implements OnInit {

  public formulario: FormGroup;
  public formularioTel: FormGroup;
  public atualizar: Boolean = false;
  public pessoa: Pessoa;
  public telefone: Telefone[];
  public id : number;

  public cpfMask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
  public cnpjMask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];
  public cepMask = [/\d/, /\d/, '.', /\d/, /\d/ , /\d/, '-', /\d/, /\d/, /\d/];

  constructor(private formBuilder: FormBuilder,
    private pessoaService: PessoaService,
    private rota: ActivatedRoute,
    private router : Router) {
    this.formulario = this.formBuilder.group({
      nome: new FormControl(),
      cep: new FormControl(),
      email: new FormControl(),
      cgc: new FormControl(),
      status: new FormControl(),
      tipo: new FormControl(),
      ddd: new FormControl(),
      numeroTel: new FormControl()
    });
  }

  ngOnInit() {
    console.log("init");
    this.id = this.rota.snapshot.params['id'];
    this.buscaPessoaPorId(this.id);
  }

  public configurarFormularioComDados() {

    let ddd: number = this.pessoa.ddd == 0 ? null : this.pessoa.ddd
    let numeroTel : number = this.pessoa.numeroTel == 0 ? null : this.pessoa.numeroTel

    this.formulario = this.formBuilder.group({
      nome: [this.pessoa.nome, [Validators.required]],
      cep: [this.pessoa.cep, [Validators.required]],
      email: [this.pessoa.email, [Validators.required, Validators.email]],
      cgc: [this.pessoa.cgc, Validators.required],
      status: [this.pessoa.status],
      tipo: [this.pessoa.tipo, Validators.required],
      ddd: [ddd],
      numeroTel: [numeroTel],
      nomeEmpresa: [this.pessoa.nomeEmpresa, [Validators.required, Validators.maxLength(100)]]
    });

  }


  public buscaPessoaPorId(id: number) {
    this.pessoaService.buscarPessoasID(id)
      .subscribe((retorno: any) => {
        console.log("ID: ", retorno);
        this.pessoa = retorno;
        //this.telefone.push(retorno.telefones);
        this.configurarFormularioComDados();
      })
  }

  public atualizarPessoa() {

    console.log("Form: ", this.formulario.value)

    let pessoa: Pessoa;
    let telefone: Telefone;
    let ddd: number = this.formulario.value.ddd == 0 ? null : this.formulario.value.ddd
    let numeroTel : number = this.formulario.value.numeroTel == 0 ? null : this.formulario.value.numeroTel
    pessoa = new Pessoa(this.formulario.value.nome, this.formulario.value.cep, this.formulario.value.email, this.formulario.value.cgc, this.formulario.value.status, this.formulario.value.tipo, ddd, numeroTel, this.formulario.value.nomeEmpresa);
    telefone = new Telefone(this.formulario.value.ddd, this.formulario.value.numeroTel);

    this.pessoaService.atualizarPessoa(this.id, pessoa)
      .subscribe((retorno: HttpResponse<Pessoa>) => {
        console.log(retorno);
        this.atualizar = true;
        this.router.navigate(["/"]);
      })
  }
}
