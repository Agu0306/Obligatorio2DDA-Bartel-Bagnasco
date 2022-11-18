package com.ctc.obligatorio2dda.clases;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "clientes")
public class Cliente implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 8, unique = true)
    private String CI;

    @Column(length = 30)
    private String nombre;

    @Column(length = 30)
    private String apellido;

    @Column(nullable = false, length = 30, unique = true)
    private String email;

    public Long getId() {
        return id;
    }

    public String getCI() {
        return CI;
    }

    public void setCI(String pCI) {
        this.CI = pCI;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String pNombre) {
        this.nombre = pNombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String pApellido) {
        this.apellido = pApellido;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String pEmail) {
        this.email = pEmail;
    }

    public Cliente(String pCI, String pNombre, String pApellido, String pEmail) {
        this.CI = pCI;
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.email = pEmail;
    }

    public Cliente(){ }
} 