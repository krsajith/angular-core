import { Component,  OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-base'
  , template: ''})
export class BaseComponent implements OnDestroy {

  destroy$ = new Subject<boolean>();


  ngOnDestroy() {
    // this.destroy$.next(true);
    this.destroy$.complete();
  }


}
