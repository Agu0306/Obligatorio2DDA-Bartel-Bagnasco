package com.ctc.obligatorio2dda.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "planesclienteaux")
public class PlanesClienteAux implements Serializable{
    @Id
    @Column()
    private Long cliente_ci;

    @Id
    @Column()
    private Long plan_id;
}
