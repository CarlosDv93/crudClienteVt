import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Pessoa } from 'src/app/model/pessoa.model';
import { HttpClient } from '@angular/common/http';
import { PessoaService } from 'src/app/service/pessoa.service';

@Component({
  selector: 'app-lista-pessoas',
  templateUrl: './lista-pessoas.component.html',
  styleUrls: ['./lista-pessoas.component.css'],
  providers: [PessoaService]
})
export class ListaPessoasComponent implements OnInit {

  public pessoas : Pessoa[];
  @Input() atualizar : Boolean;

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

}
