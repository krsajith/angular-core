import { Component, OnInit, Type, ViewChild } from '@angular/core';
import { ComponentHostDirective } from '../core/component-host.directive';
import { BaseComponent } from '../core/controls/base-conrol/base.component';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  @ViewChild(ComponentHostDirective, { static: false }) componentHost!: ComponentHostDirective;

  visible = false;

  constructor() { }

  ngOnInit(): void {
  }

  show(baseComponent:Type<BaseComponent>): void {

    this.visible = true;
    setTimeout(() => {
      const viewContainerRef = this.componentHost.viewContainerRef;
      viewContainerRef.clear();
      const componentRef = viewContainerRef.createComponent< BaseComponent>(baseComponent);
        
    }, 300);
   
  }

}
