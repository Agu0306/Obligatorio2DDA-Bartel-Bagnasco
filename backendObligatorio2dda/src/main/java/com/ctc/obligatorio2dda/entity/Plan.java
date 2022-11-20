package com.ctc.obligatorio2dda.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import java.sql.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "planes")
public class Plan implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 20)
    private String destino;

    @Column()
    private Date fecha;

    @Column(length = 9)
    private String modalidad;

    @Column()
    private Double precio;

    public Long getId() {
        return id;
    }

    public String getDestino() {
        return destino;
    }

    public void setDestino(String pDestino) {
        this.destino = pDestino;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date pFecha) {
        this.fecha = pFecha;
    }

    public String getModalidad() {
        return modalidad;
    }

    public void setModalidad(String pModalidad) {
        this.modalidad = pModalidad;
    }

    public Double getPrecio() {
        return precio;
    }

    public void setPrecio(Double pPrecio) {
        this.precio = pPrecio;
    }

    @ManyToMany
    @JoinTable(
        name = "planes_cliente",
        joinColumns = @JoinColumn(name = "plan_id"),
        inverseJoinColumns = @JoinColumn(name = "cliente_id")
    )
    private Set<Cliente> enrolledClientes = new HashSet<>();

    public Plan(String pDestino, Date pFecha, String pModalidad, Double pPrecio) {
        this.destino = pDestino;
        this.fecha = pFecha;
        this.modalidad = pModalidad;
        this.precio = pPrecio;
    }

    public Plan(){ }
} 