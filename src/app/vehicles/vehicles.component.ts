import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {

  vehicles:any = [];

  term:string = "";

  isAsc:boolean = false;

  constructor(private vehicleService:VehicleService) {
    this.getVehicles();
  }

  // GET VEHICLES
  getVehicles(){
    this.vehicleService.getVehicles().subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert("Internal Server Error");
      }
    )
  }

  // DELETE
  deleteVehicle(id:string){
    this.vehicleService.deleteVehicle(id).subscribe(
      (data:any)=>{
        alert("Deleted Successfully");
        location.reload();
      },
      (err:any)=>{
        alert("Delete Failed");
      }
    )
  }

  // FILTER
  filterVehicles(){
    this.vehicleService.filterVehicle(this.term).subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }

  // PAGINATION
  pagedVehicles(page:number){
    this.vehicleService.pagedVehicles(page).subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
  }

  // SORTING
  sortVehicles(column:string){

    this.isAsc = !this.isAsc;

    this.vehicleService.sortVehicles(column,this.isAsc ? 'asc':'desc').subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
  }

}



