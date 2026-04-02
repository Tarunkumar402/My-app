import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { capgeminiEmail } from 'src/assets/validators';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  userForm: FormGroup = new FormGroup({

    name: new FormControl('', [Validators.required,Validators.minLength(3)]),
    age: new FormControl('',[Validators.required,Validators.min(18),Validators.max(100)]),
email: new FormControl('', [ Validators.required,Validators.email, capgeminiEmail]),
    dob: new FormControl(),

    phone: new FormControl('', [Validators.pattern('[0-9]{10}')]),

  password: new FormControl('', [
  Validators.required,
  Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&]{8,}$')
]),
    address: new FormGroup({
      city: new FormControl('',[Validators.required,Validators.minLength(3)]),
      pincode: new FormControl()
      
    }),

    type: new FormControl(''),

    
    cards: new FormArray([])

  });

  // Get cards array
  get cardsArray() {
    return this.userForm.get('cards') as FormArray;
  }

  // Create one card
  createCard() {
    return new FormGroup({
      name: new FormControl('', Validators.required),
      number: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{16}')
      ]),
      cvv: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{3}')
      ])
    });
  }

  // 👉 Add card
  addCard() {
    this.cardsArray.push(this.createCard());
  }

  // 👉 Delete card
  deleteCard(i: number) {
    this.cardsArray.removeAt(i);
  }

  constructor() {

    this.userForm.get('type')?.valueChanges.subscribe((data: string) => {

      if (data === 'dayScholar') {
        this.userForm.addControl('busFee', new FormControl('', Validators.required));
        this.userForm.removeControl('hostelFee');
      }

      else if (data === 'residential') {
        this.userForm.addControl('hostelFee', new FormControl('', Validators.required));
        this.userForm.removeControl('busFee');
      }

    });

  }

  submit() {
    console.log(this.userForm.value);
  }

}