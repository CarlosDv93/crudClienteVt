import { TipoPessoa } from '../utils/tipo.pessoa.enum';
import { Status } from '../utils/status.enum';

export class Pessoa {
    public id: number;

	public nome : string ;
	public cep: string ;
	public email: string;
	public cgc: string;
	public status: Status;
    public tipo: TipoPessoa;
    public ddd: number;
    public numeroTel: number;
    
    constructor(nome : string, cep: string, email: string, cgc: string, status: Status, tipo: TipoPessoa, ddd: number, numeroTel: number){
        this.nome = nome;
        this.cep = cep;
        this.email = email;
        this.cgc = cgc;
        this.status = status;
        this.tipo = tipo;
        this.ddd = ddd;
        this.numeroTel = numeroTel
    }
}