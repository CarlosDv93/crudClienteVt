import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Pessoa } from '../model/pessoa.model';
import { FormGroup } from '@angular/forms';
import { Telefone } from '../model/telefone.model';
import 'rxjs/add/operator/retry';

@Injectable()
export class PessoaService {

    private url_api = 'http://localhost:8080/pessoa'

    constructor(private httpClientModule : HttpClientModule,
        private http : HttpClient){
    }

    public salvaPessoa(pessoa: Pessoa) : Observable<HttpResponse<Pessoa>>{
        return this.http.post(`${this.url_api}/`,  pessoa, {observe : 'response'})
            .map((retorno: HttpResponse<Pessoa>) => {
                return retorno;
            })
    }

    public buscarPessoas() : Observable<Pessoa[]>{
        return this.http.get(`${this.url_api}`)
            .map((retorno: Pessoa[]) => {
                return retorno;
            })
    }

    public buscarPessoasID(id:number) : Observable<Pessoa>{
        return this.http.get(`${this.url_api}/${id}`)
            .map((retorno: Pessoa) => {
                return retorno;
            })
    }

    public buscarPessoasNome(nome: string) : Observable<Pessoa[]>{
        return this.http.get(`${this.url_api}/buscar?nome=${nome}`)
        .retry(10)
        .map((retorno: Pessoa[]) => {
            return retorno;
        })
    }

    public atualizarPessoa(id:number, pessoa: Pessoa) : Observable<HttpResponse<Pessoa>>{
        return this.http.put(`${this.url_api}/${id}`,  pessoa, {observe : 'response'})
            .map((retorno: HttpResponse<Pessoa>) => {
                return retorno;
            })
    }

    public atualizarTelefone(id: number, telefone: Telefone) : Observable<HttpResponse<Telefone>>{
        return this.http.put(`${this.url_api}/${id}`,  telefone, {observe : 'response'})
            .map((retorno: HttpResponse<Telefone>) => {
                return retorno;
            })
    }

    public deletar(id: number): Observable<HttpResponse<Pessoa>> {
        return this.http.delete(`${this.url_api}/${id}`,  {observe : 'response'})
        .map((retorno: HttpResponse<Pessoa>) => {
            return retorno;
        })
    }

}