import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Pessoa } from '../model/pessoa.model';
import { FormGroup } from '@angular/forms';

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
}