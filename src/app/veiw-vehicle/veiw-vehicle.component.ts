import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-veiw-vehicle',
  templateUrl: './veiw-vehicle.component.html',
  styleUrls: ['./veiw-vehicle.component.css']
})
export class VeiwVehicleComponent {
  id:string="";
  vehicle:any;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private vehicleService: VehicleService
  ) {

    this.activatedRoute.params.subscribe((data: any) => {
      this.id = data.id;

      this.vehicleService.getVehicle(data.id).subscribe((data: any) => {
        this.vehicle = data;
      });

    });

  }


}
