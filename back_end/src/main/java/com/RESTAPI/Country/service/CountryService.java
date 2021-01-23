package com.RESTAPI.Country.service;

import com.RESTAPI.Country.model.Country;
import com.RESTAPI.Country.repository.CountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CountryService {

    @Autowired
    private CountryRepository repo;

    public List<Country> listAll(){
        return (List<Country>) repo.findAll();
    }
    public  void  save(Country country){
        repo.save(country);
    }
    public  Country get(Long id){
        return  repo.findById(id).get();
    }
    public  void delete(Long id){
        repo.deleteById(id);
    }
}
