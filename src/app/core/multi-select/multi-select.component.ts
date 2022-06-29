import { SelectionModel } from '@angular/cdk/collections';
import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseConrolComponent } from '../controls/base-conrol/base-conrol.component';


@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MultiSelectComponent),
      multi: true
    }
  ]  
})
export class MultiSelectComponent extends BaseConrolComponent {

  isOpen = false;
  _options!: any[];
  @Input() label: string = 'label';
  @Input() value: string = 'value';

  selectedOptions:SelectionModel<any> = new SelectionModel(true);
  selectedLabel!: string | unknown;

  constructor(){
    super();
    console.log(this.selectedOptions);
  }

  writeValue(value: any[]): void {
    if(value){
      this.selectedOptions.select(value);
      console.log('writeValue', value);
    }
  }
  

  @Input()
  public set options(options: any[]) {
    console.log('options', options);
    this._options = options;
    this.selectedOptions= new SelectionModel(true);
  }

  toggle(option: any) {
    console.log(this.selectedOptions.selected);
    this.selectedOptions.toggle(option);
    this.onChange(this.selectedOptions.selected.map((o:any) => o[this.value]));
    this.selectedLabel = this.selectedOptions.selected.map((o:any) => o[this.label]).join(', ');
    
  }
}
