import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './products.component.html'
})
export class ProductsComponent {

  productForm: FormGroup = new FormGroup({

    // ✅ Basic fields
    title: new FormControl(''),
    price: new FormControl(''),
    brand: new FormControl(''),

    // ✅ Nested object
    dimensions: new FormGroup({
      width: new FormControl(''),
      height: new FormControl(''),
      depth: new FormControl('')
    }),

    // ✅ Reviews (array)
    reviews: new FormArray([])

  });

  // 👉 Getter for reviews
  get reviewsArray() {
    return this.productForm.get('reviews') as FormArray;
  }

  // 👉 Create review row
  createReview(data?: any) {
    return new FormGroup({
      rating: new FormControl(data?.rating || ''),
      comment: new FormControl(data?.comment || ''),
      reviewerName: new FormControl(data?.reviewerName || '')
    });
  }

  // 👉 Load API data
  loadProduct() {

    const product = {
      title: "Essence Mascara Lash Princess",
      price: 9.99,
      brand: "Essence",
      dimensions: {
        width: 15.14,
        height: 13.08,
        depth: 22.99
      },
      reviews: [
        { rating: 3, comment: "Bad", reviewerName: "Eleanor" },
        { rating: 4, comment: "Good", reviewerName: "Lucas" }
      ]
    };

    // ✅ Patch normal values
    this.productForm.patchValue({
      title: product.title,
      price: product.price,
      brand: product.brand,
      dimensions: product.dimensions
    });

    // ✅ Load reviews
    product.reviews.forEach(r => {
      this.reviewsArray.push(this.createReview(r));
    });
  }

  // 👉 Add new review
  addReview() {
    this.reviewsArray.push(this.createReview());
  }

  // 👉 Delete review
  deleteReview(i: number) {
    this.reviewsArray.removeAt(i);
  }

  constructor() {
    this.loadProduct(); // load data on start
  }

  submit() {
    console.log(this.productForm.value);
  }

}