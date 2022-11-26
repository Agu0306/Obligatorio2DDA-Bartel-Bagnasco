package com.ctc.obligatorio2dda.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import com.ctc.obligatorio2dda.entity.Cliente;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long>{
    @Query(value = "SELECT pc.cliente_id FROM planes_clientes pc GROUP BY pc.cliente_id HAVING COUNT(pc.cliente_id) >= 3", nativeQuery = true)
    public Cliente findClienteEstandarToPremium();
}