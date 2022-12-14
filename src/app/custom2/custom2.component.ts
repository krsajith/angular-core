import { Component } from '@angular/core';
import { BaseComponent } from '../core/controls/base-conrol/base.component';
import { PubSubService } from '../pub-sub.service';

@Component({
  selector: 'app-custom2',
  templateUrl: './custom2.component.html',
  styleUrls: ['./custom2.component.css']
})
export class Custom2Component extends BaseComponent{

  constructor(public pubsub:PubSubService) {
    super();
    pubsub.subscribeFromStore('account.currency').subscribe(value=>{
      console.log(value);
      
    })
  }
}
