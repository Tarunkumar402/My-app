
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class VehicleService {

  constructor(private httpClient:HttpClient) { }

  url = "https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction";

  // GET
  getVehicles():Observable<any>{
    return this.httpClient.get(this.url);
  }

  // DELETE
  deleteVehicle(id:string):Observable<any>{
    return this.httpClient.delete(this.url + "/" + id);
  }

  // FILTER
  filterVehicle(term:string):Observable<any>{
    return this.httpClient.get(this.url + "?filter=" + term);
  }

  // PAGINATION
  pagedVehicles(page:number){
    return this.httpClient.get(this.url + "?limit=10&page=" + page);
  }

  // SORTING
  sortVehicles(column:string,order:string){
    return this.httpClient.get(
      this.url + "?sortBy=" + column + "&order=" + order
    );
  }

getvehicleswithqueryparams(term:string,column:string,order:string,page:number){

  return this.httpClient.get(
    this.url + "?filter=" + term +
    "&sortby=" + column +
    "&order=" + order +
    "&limit=10" +
    "&page=" + page
  );

}

}