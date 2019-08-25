package com.carlosdv93.vetta.controllers;

import java.net.URI;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.carlosdv93.vetta.model.Pessoa;
import com.carlosdv93.vetta.model.Telefone;
import com.carlosdv93.vetta.repositories.PessoaRepository;

@RestController
@RequestMapping(value="/pessoa")
public class PessoaController {

	@Autowired
	private PessoaRepository repository;
	
	@GetMapping(path="")
	public Iterable<Pessoa> getAll(){
		return repository.findAll();
	}
	
	@PostMapping(path="")
	public ResponseEntity<Pessoa> insert(@Valid @RequestBody Pessoa pessoa){
		pessoa = repository.save(pessoa);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(pessoa).toUri();
		return ResponseEntity.status(201).body(pessoa);
	}
	
	@GetMapping(path="/{id}")
	public ResponseEntity<Pessoa> getById(@PathVariable Long id){
		Pessoa pessoa = repository.findOne(id);
		return ResponseEntity.ok(pessoa);
	}
	
	@SuppressWarnings("unchecked")
	@RequestMapping(path="/{id}", method=RequestMethod.PUT)
	public ResponseEntity<Pessoa> atualizarPessoa(@PathVariable Long id, @RequestBody Pessoa pessoa){
		Pessoa pessoa1 = repository.findOne(id);
		if(pessoa1 != null) {
			pessoa1.setNome(pessoa.getNome());
			pessoa1.setCep(pessoa.getCep());
			pessoa1.setCgc(pessoa.getCgc());
			pessoa1.setEmail(pessoa.getEmail());
			pessoa1.setStatus(pessoa.getStatus());
			pessoa1.setNumeroTel(pessoa.getNumeroTel());
			pessoa1.setDdd(pessoa.getDdd());
			pessoa1.setNomeDaEmpresa(pessoa.getNomeDaEmpresa());
			repository.save(pessoa1);
			return ResponseEntity.ok(pessoa1);
		} else {
			return (ResponseEntity<Pessoa>) ResponseEntity.badRequest();
		}
	}
	
	@SuppressWarnings("unchecked")
	@RequestMapping(path="/{id}", method=RequestMethod.POST)
	public ResponseEntity<Pessoa> vincularTelefonePessoa(@PathVariable Long id, @RequestBody Telefone telefone){
		Pessoa pessoa1 = repository.findOne(id);
		if(pessoa1 != null) {
			//pessoa1.setTelefones(Arrays.asList(telefone));
			repository.save(pessoa1);
			return ResponseEntity.ok(pessoa1);
		} else {
			return (ResponseEntity<Pessoa>) ResponseEntity.badRequest();
		}
	}
	
	@RequestMapping(path="/{id}", method=RequestMethod.DELETE)
	public ResponseEntity<Object> deletarPessoa(@PathVariable Long id){
		repository.delete(id);
		return ResponseEntity.ok(null);
	}
	
	@RequestMapping(path="/buscar", method=RequestMethod.GET)
	public ResponseEntity<List<Pessoa>> getByName(@RequestParam String nome){
		List<Pessoa> pessoas = repository.findByNomeContainingIgnoreCase(nome);
		return ResponseEntity.ok(pessoas);
	}
}
