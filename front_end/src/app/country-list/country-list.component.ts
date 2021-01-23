import { Component, OnInit } from '@angular/core';
import {Country} from './../country';
import {Router} from '@angular/router'
import { Observable } from 'rxjs';
import { CountryService } from '../country.service';
@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
countries:Observable<Country[]>;
private id:number;
private countryList: Object;
private addButton:boolean;
private updateButton:boolean;
name:any;
code:string;
capital:string;
population:number;
co:any;
private country = new Country();
private invalidCountryName:boolean;
private invalidCapital:boolean;
private invalidCode:boolean;
private invalidPopulation:boolean;
  constructor(private countryService:CountryService,private router:Router) { }

  ngOnInit() {
    this.reloadData();
    this.addButton = true;
    this.updateButton = false;

    this.invalidCountryName= false;
    this.invalidCapital= false;
    this.invalidPopulation= false;
    this.invalidCode=false;

  }
  reloadData(){
    //this.countries=this.countryService.getCountryList();
    this.countryService.getCountryList().subscribe(
      data => {
        this.countryList = data; 
        console.log(data);
      },
      Error => {
        alert("failed while getting country details")
      }
      )
  }
 

  saveCountry(country: object){
    this.countryService.createCountry(country).subscribe(
      data => {
      
        alert("Succesfully Added country details");
        this.ngOnInit();
      },
      Error => {
        alert("failed while adding country details")
      }
    )
  }
  AddNewCountry() {  
    this.validateFields();
    if(this.validateFields()){
      this.country.name = this.name;
      this.country.code = this.code;
      this.country.capital = this.capital;
      this.country.population = this.population;
      this.saveCountry(this.country);
      this.name=null;
      this.code=null;
      this.capital=null;
      this.population=null;
    }
    
  }
  changeCountry(country,id){
    this.countryService.updateCountry(id,country).subscribe(
      data => {
        this.ngOnInit();
        alert("Succesfully Updated country details")
      },
      Error => {
        alert("failed while updating country details")
      }
    )
  }
  

  deleteCountry(id){
    this.countryService.deleteCountry(id).subscribe(
      data => {
        this.ngOnInit();
        alert("Succesfully Deleted country details")
      },
      Error => {
        alert("failed while Deleting country details")
      }
    )
  }
  LoadData(country:Country) {
    console.log(country.id);
    
    this.name=country.name;
    this.code=country.code;
    this.capital=country.capital; 
    this.population=country.population;
    this.id=country.id;
    console.log(country.code);
    this.addButton = false;
    this.updateButton = true; 
  }
  updateWithNewData() {
    this.country.name = this.name;
    this.country.code = this.code;
    this.country.capital = this.capital;
    this.country.population = this.population;
    this.country.id = this.id;
    console.log(this.country.id);
    console.log(this.country.population );
    this.changeCountry(this.country,this.country.id);
    this.name=null;
    this.code=null;
    this.capital=null;
    this.population=null;
  }

  validateFields() : boolean{
    if(this.name == null) {
      this.invalidCountryName =true;
      return false;
    }
  
    else if(this.code == null) {
      this.invalidCode=true;
      return false;
    }
  
    else  if(this.capital == null) {
      this.invalidCapital =true;
      return false;
    }
    else  if(this.population == null) {
      this.invalidPopulation =true;
      return false;
    }
  
    return true;
  }
}
