import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRoutingModule } from './cards-routing.module';
import { IdCardsComponent } from './id-cards/id-cards.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    IdCardsComponent
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,
    FormsModule
  ]
})
export class CardsModule { }
