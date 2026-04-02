import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdCardsComponent } from './id-cards/id-cards.component';

const routes: Routes = [
  {path:'id-cards', component:IdCardsComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardsRoutingModule { }
