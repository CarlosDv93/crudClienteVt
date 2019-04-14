package com.carlosdv93.vetta.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.carlosdv93.vetta.model.Telefone;

@Repository
public interface TelefoneRepository extends CrudRepository<Telefone, Long>{

}
