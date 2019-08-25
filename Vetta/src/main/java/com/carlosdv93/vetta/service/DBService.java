package com.carlosdv93.vetta.service;

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
		
		Pessoa pess1 = new Pessoa("Carlos David", "35.681-108", "carlosdv09@gmail.com", true, TipoPessoa.FISICA, "376.577.730-73", 37, 3242-5926, "Teste");
		pessoaRP.save(pess1);
		
		Pessoa pess2 = new Pessoa("Teste", "35.681-108", "teste@gmail.com", true, TipoPessoa.FISICA, "145.043.960-84", 37, 3242-5926, "Teste");
		pessoaRP.save(pess2);
		
		Pessoa pess3 = new Pessoa("Teste123", "35.681-108", "teste123@gmail.com", true, TipoPessoa.FISICA, "088.230.850-55", 37, 3242-5926, "Teste");
		pessoaRP.save(pess3);
		
		Pessoa pess4 = new Pessoa("Teste123", "35.681-108", "teste123@gmail.com", true, TipoPessoa.JURIDICA, "02.634.834/0001-84", 37, 3242-5926, "Teste");
		pessoaRP.save(pess4);
		
		/*
		 * Telefone tel1 = new Telefone("31", "99999999"); telefoneRP.save(tel1);
		 * 
		 * Telefone tel2 = new Telefone("32", "88888888"); telefoneRP.save(tel2);
		 */
		
		//pess4.setTelefones(Arrays.asList(tel1));
		/*
		 * pessoaRP.save(pess4);
		 * 
		 * tel1.setPessoa(pess4); telefoneRP.save(tel1);
		 */
		
		log.info("Salvo");
		
		return true;
	}

}
