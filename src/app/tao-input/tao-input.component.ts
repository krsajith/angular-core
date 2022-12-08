import { Component, forwardRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseConrolComponent } from '../core/controls/base-conrol/base-conrol.component';
import { BaseComponent } from '../core/controls/base-conrol/base.component';

@Component({
  selector: 'app-tao-input',
  templateUrl: './tao-input.component.html',
  styleUrls: ['./tao-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TaoInputComponent),
      multi: true,
    },
  ],
})
export class TaoInputComponent extends BaseConrolComponent  {

  @ViewChild('input') input!: HTMLInputElement;

  writeValue(value: any): void {
    // this.input.value=value;
  }

  control!: FormControl;

  override init(config: any) {
    this.control = config.control;
  }

  handleChange($event:any){
    this.onChange($event.target.value)
  }
}
