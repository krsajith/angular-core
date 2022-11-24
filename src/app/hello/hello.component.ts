import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BaseComponent } from '../core/controls/base-conrol/base.component';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class HelloComponent extends BaseComponent implements OnInit,AfterViewInit {

  constructor(private cd:ChangeDetectorRef) {
    super()
  }
  ngAfterViewInit(): void {
    console.log('start animation');
    
    setTimeout(() => {
      this.isVisible=true;
      this.cd.detectChanges();
        
    }, 50);
  }

  ngOnInit(): void {
  }

}
