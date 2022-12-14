import { Component } from '@angular/core';
import { BaseComponent } from '../core/controls/base-conrol/base.component';
import { PubSubService } from '../pub-sub.service';

@Component({
  selector: 'app-custom1',
  templateUrl: './custom1.component.html',
  styleUrls: ['./custom1.component.css']
})
export class Custom1Component extends BaseComponent {
value: any;

  constructor(public pubsub:PubSubService) {
    super();
  }

}
