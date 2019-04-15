import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../service/pessoa.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Pessoa } from '../model/pessoa.model';
import { Telefone } from '../model/telefone.model';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private formBuilder: FormBuilder,
    private pessoaService: PessoaService,
    private rota: ActivatedRoute) {
    this.formulario = this.formBuilder.group({
      nome: new FormControl(),
      cep: new FormControl(),
      email: new FormControl(),
      cgc: new FormControl(),
      status: new FormControl(),
      tipo: new FormControl(),
      ddd: new FormControl(),
      numero: new FormControl()
    });
  }

  ngOnInit() {
    console.log("init");
    let id = this.rota.snapshot.params['id'];
    this.buscaPessoaPorId(id);
  }

  public configurarFormularioComDados() {
    this.formulario = this.formBuilder.group({
      nome: [this.pessoa.nome, [Validators.required]],
      cep: [this.pessoa.cep, [Validators.required, Validators.maxLength(8), Validators.minLength(8)]],
      email: [this.pessoa.email, [Validators.required, Validators.email]],
      cgc: [this.pessoa.cgc, Validators.required],
      status: [this.pessoa.status],
      tipo: [this.pessoa.tipo, Validators.required],
      ddd: [this.telefone[0].ddd],
      numero: [this.telefone[0].numero]
    });

  }


  public buscaPessoaPorId(id: number) {
    this.pessoaService.buscarPessoasID(id)
      .subscribe((retorno: any) => {
        console.log("ID: ", retorno);
        this.pessoa = retorno;
        this.telefone.push(retorno.telefones);
        this.configurarFormularioComDados();
      })
  }

  public atualizarPessoa() {

    console.log("Form: ", this.formulario.value)

    let pessoa: Pessoa;
    let telefone: Telefone;

    pessoa = new Pessoa(this.formulario.value.nome, this.formulario.value.cep, this.formulario.value.email, this.formulario.value.cgc, this.formulario.value.status, this.formulario.value.tipo);
    telefone = new Telefone(this.formulario.value.ddd, this.formulario.value.numeroTel);

    this.pessoaService.salvaPessoa(pessoa)
      .subscribe((retorno: HttpResponse<Pessoa>) => {
        console.log(retorno);
        this.atualizar = true;
        if (retorno.status == 201) {
          this.pessoaService.atualizarTelefone(retorno.body.id, telefone)
            .subscribe((retorno: HttpResponse<Telefone>) => {
              console.log(retorno);
            })
        }
      })
  }
}
