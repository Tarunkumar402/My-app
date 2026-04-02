import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Common2Service {

  private count = new BehaviorSubject<number>(0);
  count$ = this.count.asObservable();

  updateCount(value: number) {
    this.count.next(value);
  }
}