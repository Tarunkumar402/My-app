import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  // Data
  productName: string = 'Laptop';
  price: number = 50000;
  isAvailable: boolean = true;

  // Style & class
  textColor: string = 'green';
  isHighlight: boolean = false;

  // Input value
  userInput: string = '';

  // Event
  addToCart() {
    alert(this.productName + ' added to cart!');
  }

  changeColor() {
    this.textColor = 'red';
  }

}