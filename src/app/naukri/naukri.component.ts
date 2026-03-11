import { Component, OnInit } from '@angular/core';
import { JobsService } from '../naukri.service'; 

@Component({
  selector: 'app-naukri',
  templateUrl: './naukri.component.html'
})

export class NaukriComponent implements OnInit {

  jobs:any[] = [];

  constructor(private jobService: JobsService){}

  ngOnInit() {
    this.jobService.getJobs().subscribe((data:any)=>{
      this.jobs = data;
    });
  }

}