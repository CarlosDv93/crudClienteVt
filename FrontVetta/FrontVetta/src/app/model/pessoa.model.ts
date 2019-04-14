import { TipoPessoa } from '../utils/tipo.pessoa.enum';
import { Status } from '../utils/status.enum';

export class Pessoa {
    private id: number;

	private nome : string ;
	private cep: string ;
	private email: string;
	private cgc: string;
	private status: Status;
    private tipo: TipoPessoa;
    
    constructor(nome : string, cep: string, email: string, cgc: string, status: Status, tipo: TipoPessoa){
        this.nome = nome;
        this.cep = cep;
        this.email = email;
        this.cgc = cgc;
        this.status = status;
        this.tipo = tipo;
    }
}