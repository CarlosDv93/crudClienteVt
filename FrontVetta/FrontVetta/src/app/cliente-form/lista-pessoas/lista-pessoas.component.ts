import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Pessoa } from 'src/app/model/pessoa.model';
import { HttpClient } from '@angular/common/http';
import { PessoaService } from 'src/app/service/pessoa.service';
import { Subject, Observable } from 'rxjs';


import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/debounceTime'; //Sem também funcionou
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/empty';

@Component({
  selector: 'app-lista-pessoas',
  templateUrl: './lista-pessoas.component.html',
  styleUrls: ['./lista-pessoas.component.css'],
  providers: [PessoaService]
})
export class ListaPessoasComponent implements OnInit {

  public pessoas : Pessoa[];
  @Input() atualizar : Boolean;
  public cpfMask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
  public cnpjMask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];
  public cepMask = [/\d/, /\d/, /\d/, /\d/ , /\d/, '-', /\d/, /\d/, /\d/];

  private subjectPesquisa: Subject<string> = new Subject<string>();

  constructor(private http : HttpClient,
    private pessoaService: PessoaService) { 
  }

  ngOnInit() {
    this.buscarPessoas();
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Add '${implements OnChanges}' to the class.
    console.log(changes)
    if(this.atualizar == true){
      this.atualizarLista();
      this.atualizar = false;
    }
  }

  buscarPessoas() : void {
    console.log("buscarPessoas")
    this.pessoaService.buscarPessoas()
      .subscribe((retorno: any ) => {
        console.log("Retorno buscar: ", retorno);
        return this.pessoas = retorno;
      })
  }

  atualizarLista() {
    this.buscarPessoas();
  }

  deletar(id) {
    this.pessoaService.deletar(id)
      .subscribe((retorno: any)=> {
        this.atualizarLista();
        return retorno;
      })
  }

  buscarPessoasNome(nome : string) {

    this.pessoaService.buscarPessoasNome(nome)
      .debounceTime(1000)
      .distinctUntilChanged()
      .subscribe((pessoas : Pessoa[]) => {
        this.pessoas = pessoas;
      })
  }
}
