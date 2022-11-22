package com.ctc.obligatorio2dda.entity;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class Cliente implements Serializable {

    @Id
    @Column(unique = true)
    private Long CI;

    @Column(length = 30)
    private String nombre;

    @Column(length = 30)
    private String apellido;

    @Column(nullable = false, length = 30, unique = true)
    private String email;

    @Column
    private String tipo;

    @JsonIgnore
    @ManyToMany(mappedBy = "enrolledClientes")
    private Set<Plan> planes = new HashSet<>();

    public Long getCI() {
        return CI;
    }

    public void setCI(Long pCI) {
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

    public String getTipo(){
        return tipo;
    }

    public void setTipo(String pTipo){
        this.tipo = pTipo;
    }

    public Set<Plan> getPlanes(){
        return planes;
    }

    public Cliente(Long pCI, String pNombre, String pApellido, String pEmail, String pTipo) {
        this.CI = pCI;
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.email = pEmail;
        this.tipo = pTipo;
    }

    public Cliente(){ }
} 