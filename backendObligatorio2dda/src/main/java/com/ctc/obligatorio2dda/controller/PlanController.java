package com.ctc.obligatorio2dda.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;

import com.ctc.obligatorio2dda.entity.Plan;
import com.ctc.obligatorio2dda.service.PlanServiceImpl;

@CrossOrigin
@Controller
@RestController
@RequestMapping("api")
public class PlanController{
    @Autowired
    private PlanServiceImpl planServiceImpl;

    @PostMapping(value = "/agregarplan")
    public ResponseEntity<?> create(@RequestBody Plan plan) {
        try {
            return ResponseEntity.status(HttpStatus.CREATED).body(planServiceImpl.save(plan));
        } catch (Exception e) {
            HashMap<String, String> error = new HashMap<>();
            error.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(error);
        }
    }

    @PutMapping("/modificarplan/{id}")
    public ResponseEntity<Plan> update(@PathVariable("id") Long id, @RequestBody Plan plan) {
        Optional<Plan> planData = planServiceImpl.findById(id);

        if (planData.isPresent()) {
            Plan _plan = planData.get();
            _plan.setDestino(plan.getDestino());
            _plan.setFecha(plan.getFecha());
            _plan.setModalidad(plan.getModalidad());
            _plan.setPrecio(plan.getPrecio());
            return new ResponseEntity<>(planServiceImpl.save(_plan), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping(value = "/borrarplan/{id}")
    public ResponseEntity<HttpStatus> delete(@PathVariable Long id) {
        try {
            planServiceImpl.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/planes/{id}")
    public ResponseEntity<?> read(@PathVariable(value = "id") Long planId) {
        Optional<Plan> unPlan = planServiceImpl.findById(planId);
        if (!unPlan.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(unPlan);
    }

    @GetMapping("/planes")
    public List<Plan> readAll() {
        List<Plan> plans = StreamSupport
                .stream(planServiceImpl.findAll().spliterator(), false)
                .collect(Collectors.toList());
        return plans;
    }
}