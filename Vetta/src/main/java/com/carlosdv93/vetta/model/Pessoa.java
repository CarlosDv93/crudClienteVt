package com.carlosdv93.vetta.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.carlosdv93.vetta.utils.TipoPessoa;

@Entity
@Table(name = "pessoa")
public class Pessoa implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String nome;
	private String cep;
	private String email;
	private String cgc;
	private boolean status;
	private TipoPessoa tipo;
	
	//@OneToMany(mappedBy="pessoa", cascade = CascadeType.ALL, fetch = FetchType.LAZY, targetEntity=Telefone.class)
	//private List<Telefone> telefones;

	private int ddd;
	private long numeroTel;

	public Pessoa() {

	}

	public Pessoa(String nome, String cep, String email, boolean status, TipoPessoa tipo, String cgc, int ddd,	long numeroTel) {
		this.nome = nome;
		this.cep = cep;
		this.email = email;
		this.cgc = cgc;
		this.status = status;
		this.tipo = tipo;
		this.ddd = ddd;
		this.numeroTel = numeroTel;
	}


	public Long getId() {
		return id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCep() {
		return cep;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public boolean getStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public String getCgc() {
		return cgc;
	}

	public void setCgc(String cgc) {
		this.cgc = cgc;
	}

	public TipoPessoa getTipo() {
		return tipo;
	}

	public void setTipo(TipoPessoa tipo) {
		this.tipo = tipo;
	}
	
	

	/*
	 * public List<Telefone> getTelefones() { return telefones; }
	 * 
	 * public void setTelefones(List<Telefone> telefones) { this.telefones =
	 * telefones; }
	 */

	public int getDdd() {
		return ddd;
	}

	public void setDdd(int ddd) {
		this.ddd = ddd;
	}

	public long getNumeroTel() {
		return numeroTel;
	}

	public void setNumeroTel(long numeroTel) {
		this.numeroTel = numeroTel;
	}

	@Override
	public String toString() {
		return "Pessoa: \n" + "Nome: " + getNome() + "\n" + "CEP: " + getCep() + "\n";
	}


}
