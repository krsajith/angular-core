import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, Type, ViewChild } from '@angular/core';
import { ComponentHostDirective } from '../core/component-host.directive';
import { BaseComponent } from '../core/controls/base-conrol/base.component';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class PopupComponent {


  visible = false;
  baseComponent!: Type<BaseComponent>;
  config: any;
  childVisible = false;

  constructor(private cd:ChangeDetectorRef) {
    
  }

  show(baseComponent: Type<BaseComponent>,config?:any): void {
    this.baseComponent = baseComponent;
    this.visible = true;
    this.childVisible = false
    this.config=config;
    // this.cd.detectChanges();

  }

  // @ViewChild(ComponentHostDirective, { static: false }) componentHost!: ComponentHostDirective;


  @ViewChild(ComponentHostDirective, { static: false }) set someDummySetterName(componentHost: ComponentHostDirective) {
    if(!componentHost) return;
    const viewContainerRef = componentHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef1 = viewContainerRef.createComponent<BaseComponent>(this.baseComponent);
    const componentRef2 = viewContainerRef.createComponent<BaseComponent>(this.baseComponent);
    const componentRef3 = viewContainerRef.createComponent<BaseComponent>(this.baseComponent);
    componentRef1.instance.init(this.config);
    componentRef2.instance.init(this.config);
    componentRef3.instance.init(this.config);
    // this.cd.detectChanges();
    setTimeout(() => {
      this.childVisible = true;  
    }, );
    
    // this.cd.detectChanges();
  }
}
