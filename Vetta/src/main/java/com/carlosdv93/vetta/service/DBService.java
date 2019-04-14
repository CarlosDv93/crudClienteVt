package com.carlosdv93.vetta.service;

import java.util.Arrays;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import com.carlosdv93.vetta.VettaApplication;
import com.carlosdv93.vetta.model.Pessoa;
import com.carlosdv93.vetta.model.Telefone;
import com.carlosdv93.vetta.repositories.PessoaRepository;
import com.carlosdv93.vetta.repositories.TelefoneRepository;
import com.carlosdv93.vetta.utils.TipoPessoa;

@Service
public class DBService {
	
private static final Logger log = LoggerFactory.getLogger(VettaApplication.class);
	
	@Autowired
	private PessoaRepository pessoaRP;
	
	@Autowired
	private TelefoneRepository telefoneRP;
	
	@Bean
	public boolean instatiateDatabase() {
		
		Pessoa pess1 = new Pessoa("Carlos David", "35681108", "carlosdv09@gmail.com", true, TipoPessoa.FISICA, "37657773073");
		pessoaRP.save(pess1);
		
		Pessoa pess2 = new Pessoa("Teste", "35681108", "teste@gmail.com", true, TipoPessoa.FISICA, "14504396084");
		pessoaRP.save(pess2);
		
		Pessoa pess3 = new Pessoa("Teste123", "35681108", "teste123@gmail.com", true, TipoPessoa.FISICA, "08823085055");
		pessoaRP.save(pess3);
		
		Pessoa pess4 = new Pessoa("Teste123", "35681108", "teste123@gmail.com", true, TipoPessoa.JURIDICA, "02634834000184");
		pessoaRP.save(pess4);
		
		Telefone tel1 = new Telefone("31", "99999999");
		telefoneRP.save(tel1);
		
		Telefone tel2 = new Telefone("32", "88888888");
		telefoneRP.save(tel2);
		
		pess4.setTelefones(Arrays.asList(tel1));
		pessoaRP.save(pess4);
		
		tel1.setPessoa(pess4);
		telefoneRP.save(tel1);
		
		log.info("Salvo");
		
		return true;
	}

}
