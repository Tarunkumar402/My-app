import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html'
})
export class SummaryComponent implements OnInit {

  result: number = 0;
  count: number = 0;

  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.commonService.data$.subscribe(Data=> {
      this.result = data.result;
      this.count = data.count;
    });
  }
}