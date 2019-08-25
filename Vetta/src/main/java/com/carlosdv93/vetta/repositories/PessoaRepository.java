package com.carlosdv93.vetta.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.carlosdv93.vetta.model.Pessoa;

@Repository
public interface PessoaRepository extends CrudRepository<Pessoa, Long>{

	List<Pessoa> findByNomeContainingIgnoreCase(String nome);
	
}
