import { Component, OnInit, Type, ViewChild } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { ComponentHostDirective } from '../core/component-host.directive';

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
