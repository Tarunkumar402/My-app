import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpiComponent } from './upi/upi.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    UpiComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PaymentModule { }
