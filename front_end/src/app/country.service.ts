import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private baseUrl:string;
 
  constructor(private http:HttpClient) { 
    this.baseUrl="http://localhost:8080/rest/v2/country";
  }


  getCountry(id){
    return this.http.get(this.baseUrl+'/'+id,{ responseType: 'text' });
  }

  createCountry(country){
    return this.http.post(this.baseUrl,country,{ responseType: 'text' });
  }
  updateCountry(id,country){
    return this.http.put(this.baseUrl+'/'+id,country,{ responseType: 'text' });
  }
  deleteCountry(id){
    return this.http.delete(this.baseUrl+'/'+id,{responseType:'text'});
  }
  getCountryList(){
    return this.http.get(this.baseUrl);
  }
}
