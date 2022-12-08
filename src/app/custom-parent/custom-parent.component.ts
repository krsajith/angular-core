import { Component, Input, OnInit, Type } from '@angular/core';
import { BaseComponent } from '../core/controls/base-conrol/base.component';

@Component({
  selector: 'app-custom-parent',
  templateUrl: './custom-parent.component.html',
  styleUrls: ['./custom-parent.component.css']
})
export class CustomParentComponent implements OnInit {
  ngOnInit(): void {
    console.log('CustomParentComponent', this.baseComponent);
    
  }

  @Input() baseComponent!:Type<BaseComponent> ;

}
