package com.RESTAPI.Country.repository;
import com.RESTAPI.Country.model.Country;

import org.springframework.data.repository.CrudRepository;

public interface CountryRepository  extends CrudRepository<Country,Long> {
}
