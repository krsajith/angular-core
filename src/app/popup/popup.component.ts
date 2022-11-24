import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, Type, ViewChild } from '@angular/core';
import { ComponentHostDirective } from '../core/component-host.directive';
import { BaseComponent } from '../core/controls/base-conrol/base.component';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class PopupComponent {


  visible = false;
  baseComponent!: Type<BaseComponent>;

  constructor(private cd:ChangeDetectorRef) {
    
  }

  show(baseComponent: Type<BaseComponent>): void {
    this.baseComponent = baseComponent;
    this.visible = true;
    this.cd.detectChanges();

  }

  // @ViewChild(ComponentHostDirective, { static: false }) componentHost!: ComponentHostDirective;


  @ViewChild(ComponentHostDirective, { static: false }) set someDummySetterName(componentHost: ComponentHostDirective) {
    if(!componentHost) return;
    const viewContainerRef = componentHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent<BaseComponent>(this.baseComponent);
    // this.cd.detectChanges();
    // componentRef.instance.init();
    this.cd.detectChanges();
  }
}
