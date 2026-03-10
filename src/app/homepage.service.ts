import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {}

  url = "https://fakestoreapi.com/products";

  getProducts(){
    return this.http.get(this.url);
  }

}