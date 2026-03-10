import { Component } from '@angular/core';
import { AccountsApiService } from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})

export class AccountsComponent {

  accounts:any = [];

  constructor(private accountsApiService: AccountsApiService){

    accountsApiService.getAccounts().subscribe(

      (data:any)=>{
        this.accounts = data;
      },

      (err:any)=>{
        alert("Internal Server Error")
      }

    )

  }

}