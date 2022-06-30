import { SelectionModel } from '@angular/cdk/collections';
import { Component, ElementRef, forwardRef, Input, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseConrolComponent } from '../controls/base-conrol/base-conrol.component';
import { computePosition, flip } from '@floating-ui/dom';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MultiSelectComponent),
      multi: true,
    },
  ],
})
export class MultiSelectComponent extends BaseConrolComponent {
  isOpen = false;
  _options!: any[];
  @Input() label: string = 'label';
  @Input() value: string = 'value';

  selectedOptions: SelectionModel<any> = new SelectionModel(true);
  selectedLabel!: string | unknown;

  @ViewChild('target', { static: true }) target!: ElementRef;
  @ViewChild('dropdown', { static: true }) dropdown!: ElementRef;

  constructor() {
    super();
    console.log(this.selectedOptions);
  }

  writeValue(value: any[]): void {
    if (value && value.length > 0) {
      this.selectedOptions.select(value);
      console.log('writeValue', value);
    }
  }

  @Input()
  public set options(options: any[]) {
    console.log('options', options);
    this._options = options;
    this.selectedOptions = new SelectionModel(true);
  }

  toggle(option: any) {
    console.log(this.selectedOptions.selected);
    this.selectedOptions.toggle(option);
    this.onChange(this.selectedOptions.selected.map((o: any) => o[this.value]));
    this.selectedLabel = this.selectedOptions.selected
      .map((o: any) => o[this.label])
      .join(', ');
  }

  showDropDown() {
    this.isOpen = !this.isOpen;

    if(!this.isOpen) {
      this.hideDropDown();
      return;
    }
    
    console.log(this.target, this.dropdown);
    this.dropdown.nativeElement.style.display='flex';
    computePosition(this.target.nativeElement, this.dropdown.nativeElement, {
      placement: 'top',
      middleware: [flip()],
    }).then(({ x, y }) => {
      Object.assign(this.dropdown.nativeElement.style, {
        left: `${x}px`,
        top: `${y}px`,
      });
    });
  }

  hideDropDown() {
    this.dropdown.nativeElement.style.display='none';
    this.isOpen=false;
  }
}
