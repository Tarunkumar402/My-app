import { Component } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent {
 
  length: number = 0;
  breadth: number = 0;

  result: number = 0;
  resultLabel: string = '';

  showResult: boolean = false;

  // AREA FUNCTION
  calculateArea() {
    this.result = this.length * this.breadth;
    this.resultLabel = 'Area';
    this.showResult = true;
  }

  // PERIMETER FUNCTION
  calculatePerimeter() {
    this.result = 2 * (this.length + this.breadth);
    this.resultLabel = 'Perimeter';
    this.showResult = true;
  }

}