import { Component,  OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-base'
  , template: ''})
export class BaseComponent implements OnDestroy {

  destroy$ = new Subject<boolean>();
  isVisible = false;


  ngOnDestroy() {
    // this.destroy$.next(true);
    this.destroy$.complete();
  }

  init(data:any){
    this.isVisible=true;  
  }

}
