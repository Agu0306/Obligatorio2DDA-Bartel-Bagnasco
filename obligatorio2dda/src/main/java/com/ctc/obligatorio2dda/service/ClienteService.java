package com.ctc.obligatorio2dda.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.ctc.obligatorio2dda.clases.Cliente;

@Service
public interface ClienteService {
    public Iterable<Cliente> findAll();
    public Optional<Cliente> findById(Long Id);
    public Cliente save(Cliente save);
    public void deleteById(Long Id);
}
