import { Component } from '@angular/core';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {

  products = [
  { name: "iPhone 15", price: 80000, rating: 4.7, freeDelivery: true },
  { name: "Samsung TV", price: 55000, rating: 4.5, freeDelivery: true },
  { name: "Nike Shoes", price: 6000, rating: 4.3, freeDelivery: false },
  { name: "Wooden Table", price: 12000, rating: 4.1, freeDelivery: true },
  { name: "Dell Laptop", price: 75000, rating: 4.6, freeDelivery: true },
  { name: "T-Shirt", price: 800, rating: 4.0, freeDelivery: false },
  { name: "Office Chair", price: 9000, rating: 4.2, freeDelivery: true },
  { name: "Bluetooth Speaker", price: 2500, rating: 4.4, freeDelivery: true },
  { name: "Running Shorts", price: 1200, rating: 3.9, freeDelivery: false },
  { name: "Smart Watch", price: 5000, rating: 4.3, freeDelivery: true }
];

}
