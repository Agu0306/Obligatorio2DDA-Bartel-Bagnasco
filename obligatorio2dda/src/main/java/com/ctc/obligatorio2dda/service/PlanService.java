package com.ctc.obligatorio2dda.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.ctc.obligatorio2dda.clases.Plan;

@Service
public interface PlanService {
    public Iterable<Plan> findAll();
    public Optional<Plan> findById(Long Id);
    public Plan save(Plan save);
    public void deleteById(Long Id);
}
