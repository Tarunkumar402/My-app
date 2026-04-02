import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle2',
  templateUrl: './vehicle2.component.html',
  styleUrls: ['./vehicle2.component.css']
})
export class Vehicle2Component {
  vehicle: any =[];

  constructor (private vehicleService:VehicleService){
    // vehicleService.getVehicles().subscribe(

    //   (data:any)=>{
    //     this.vehicle
    //     =data;
    //   },

    //   (err: any)=>{
    //     alert("internal server error");
    //   }
    // )

    this.getvehicleswithqueryparams();

  }
  term:string="";
  column:string="";
  order: string="";
  page:number= 1;
  getvehicleswithqueryparams(){
    this.vehicleService.getvehicleswithqueryparams(this.term, this.column, this.order,this.page).subscribe(
      (data:any)=>{
        this.vehicle
        =data;
      },

      (err: any)=>{
        alert("internal server error");
      }

    )
  }

  search(){
    this.getvehicleswithqueryparams();
  }
 isAsc:boolean = false;

sort(column:string){

  this.column = column;

 this.isAsc = !this.isAsc;

  this.order = this.isAsc ? 'asc' : 'desc';

  this.getvehicleswithqueryparams();

}
pageVehicles(page:number){

  this.page = page;

  this.getvehicleswithqueryparams();

}


}
