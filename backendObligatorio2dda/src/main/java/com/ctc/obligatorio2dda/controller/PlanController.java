package com.ctc.obligatorio2dda.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ctc.obligatorio2dda.entity.Plan;
import com.ctc.obligatorio2dda.service.PlanService;

import org.springframework.stereotype.*;

@Controller
@RestController
@RequestMapping("api")
public class PlanController {
    @Autowired
    private PlanService planService;

    @PostMapping
    public ResponseEntity<?> create(@RequestBody Plan plan){
        return ResponseEntity.status(HttpStatus.CREATED).body(planService.save(plan));
    }

    @GetMapping("/id")
    public ResponseEntity<?> read(@PathVariable(value="id") Long planId){
        Optional<Plan> unPlan = planService.findById(planId);
        if(!unPlan.isPresent()){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(unPlan);
    }
}

