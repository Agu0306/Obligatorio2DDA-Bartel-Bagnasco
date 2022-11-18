package com.ctc.obligatorio2dda.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ctc.obligatorio2dda.clases.Cliente;
import com.ctc.obligatorio2dda.service.ClienteService;

@Controller
@RestController
@RequestMapping("api/clientes")
public class ClienteController {

    @Autowired
    private ClienteService clienteService;

    @PostMapping
    public ResponseEntity<?> create(@RequestBody Cliente cliente){
        return ResponseEntity.status(HttpStatus.CREATED).body(clienteService.save(cliente));
    }

    @GetMapping("/id")
    public ResponseEntity<?> read(@PathVariable(value="id") Long clienteId){
        Optional<Cliente> unCliente = clienteService.findById(clienteId);
        if(!unCliente.isPresent()){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(unCliente);
    }
}
