
// bind label,span to form value
import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  forwardRef,
  HostBinding
} from '@angular/core';

import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[formValue]',
  providers:
  [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => FormValueDirective), multi: true }
  ]
})
export class FormValueDirective implements ControlValueAccessor {
  @HostBinding('attr.contenteditable') enabled = false;

  private onChange!: (value: string) => void;
  private onTouched!: () => void;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('input') onInput(): void {
    this.onChange(this.elementRef.nativeElement.innerHTML);
  }

  @HostListener('blur') onBlur(): void {
    this.onTouched();
  }

  writeValue(value: string): void {
    console.log(value)
    this.elementRef.nativeElement.innerText =  value ;
  }

  registerOnChange(onChange: (value: string) => void): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: () => void): void {
    this.onTouched = onTouched;
  }

  setDisabledState(disabled: boolean): void {
    this.enabled = !disabled;
  }
}