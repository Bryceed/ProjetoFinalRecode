package com.squad19.mangut.resources;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.squad19.mangut.entities.Cliente;
import com.squad19.mangut.entities.Contato;
import com.squad19.mangut.entities.Vendedor;
import com.squad19.mangut.services.ClienteService;

@RestController
@RequestMapping("/clientes")
public class ClienteController {

	@Autowired
	ClienteService service;
	
	@GetMapping
	public List<Cliente> findAll() {
		return service.findAll();
	}
	
	@GetMapping(value = "/{id}")
    public Optional<Cliente> findById(@PathVariable Long id) {
        Optional<Cliente> clienteId = service.findById(id); 
        return clienteId;
    }
		
	@PostMapping    
    public Cliente create(@RequestBody Cliente cliente) {
        return service.create(cliente);
    }	
	
	@PutMapping  
    public Cliente update(@RequestBody Cliente cliente) {
        return service.update(cliente);
	}
	
	@DeleteMapping(value = "/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);        
	}
	
}
