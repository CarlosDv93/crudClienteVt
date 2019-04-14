package com.carlosdv93.vetta.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "telefone_com_ddd")
public class Telefone implements Serializable{
	
	private static final long serialVersionUID = 2L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String ddd;
	private String numero;
	
	@JsonIgnore
	@ManyToOne
	public Pessoa pessoa;
	
	public Telefone() {
		
	}
	
	public Telefone(String numero, String ddd) {
		this.numero = numero;
		this.ddd = ddd;
	}

	public Long getId() {
		return id;
	}
	
	public String getNumero() {
		return numero;
	}

	public void setNumero(String numero) {
		this.numero = numero;
	}

	public String getDdd() {
		return ddd;
	}

	public void setDdd(String ddd) {
		this.ddd = ddd;
	}

	public Pessoa getPessoa() {
		return pessoa;
	}

	public void setPessoa(Pessoa pessoa) {
		this.pessoa = pessoa;
	}

}
