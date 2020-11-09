import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  inactiveCount = 0;
  activeCount = 0;

  constructor() { }

  onInactive() {
    this.inactiveCount++;
    console.log('Inactive count is: ' + this.inactiveCount);
  }

  onActive() {
    this.activeCount++;
    console.log('Inactive count is: ' + this.activeCount);
  }
}
