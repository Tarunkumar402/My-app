import { Component } from '@angular/core';

@Component({
  selector: 'app-event-registration',
  templateUrl: './event-registration.component.html',
  styleUrls: ['./event-registration.component.css']
})
export class EventRegistrationComponent {
name2:string="tharun";
name: string="";
users: string[]=["ram", "lakman",]

registration(){
  this.users.push(this.name);
}
delete(i:number){
  this.users.splice(i,1);
}
}
