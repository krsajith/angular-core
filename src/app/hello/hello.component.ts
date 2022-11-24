import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, PipeTransform } from '@angular/core';
import { BaseComponent } from '../core/controls/base-conrol/base.component';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class HelloComponent extends BaseComponent implements OnInit,AfterViewInit {

  customPipe!:PipeTransform;
  today= new Date();

  constructor(private cd:ChangeDetectorRef) {
    super()
  }
  ngAfterViewInit(): void {
    console.log('start animation');
    this.isVisible=true;
    this.cd.detectChanges();
    // setTimeout(() => {
    //   this.isVisible=true;
    //   this.cd.detectChanges();
        
    // }, 50);
  }

  ngOnInit(): void {
  }

  override init(config:any){
    super.init(config);
    this.customPipe=config.pipe;
  }
}
