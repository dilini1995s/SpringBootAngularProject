package com.RESTAPI.Country.controller;

import com.RESTAPI.Country.model.Country;
import com.RESTAPI.Country.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "/rest/v2")
public class CountryController {

    @Autowired
    private CountryService service;

    @GetMapping("/country")
    public List<Country> list(){

        return  service.listAll();
    }
    @GetMapping("/country/{id}")
    public ResponseEntity<Country> get(@PathVariable Long id){
        try{
           Country Country =service.get(id);
            return new ResponseEntity<Country>(Country, HttpStatus.OK);
        }catch(NoSuchElementException e){
            return new ResponseEntity<Country>(HttpStatus.NOT_FOUND);
        }
        // return  service.get(id);
    }
    @PostMapping("/country")
    public  void add(@RequestBody Country Country ){
        service.save(Country);
    }

    @PutMapping("/country/{id}")
    public ResponseEntity<?> update(@PathVariable Long id,@RequestBody Country product){
        try{
            Country existProduct=service.get(id);
            existProduct.setName(product.getName());
            existProduct.setCode(product.getCode());
            existProduct.setCapital(product.getCapital());
            existProduct.setPopulation(product.getPopulation());
            service.save(existProduct);
            return new ResponseEntity<>(HttpStatus.OK);
        }catch(NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }
    @DeleteMapping("/country/{id}")
    public void delete(@PathVariable Long id){

        service.delete(id);
    }
    @RequestMapping(method = RequestMethod.GET, value = "/test" )
    public String test(){

        return "Testing";
    }
}
