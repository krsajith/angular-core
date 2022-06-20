import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/core/domain/page';
import { Field } from 'src/app/core/domain/field';
import { FormControl, FormGroup } from '@angular/forms';
import { StoreService } from '../store/store.service';
import { Store } from '../store/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
})
export class DynamicFormComponent implements OnInit {
  ready = false;
  formGroup!: FormGroup;
  page!: Page;
  stores: { [k: string]: Store<any> } = {};
  parentValues: { [k: string]: Observable<string> } = {};

  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    console.log('DynamicFormComponent.ngOnInit()');
  }

  async init(page: Page) {
    this.page = page;
    await this.buildForm(page.fields);
    this.ready = true;
  }

  private async buildForm(fields: Field[]) {
    const parentFields = new Set(
      fields
        .filter((field) => field.parentField !== undefined)
        .map((field) => field.parentField)
    );

    this.formGroup = new FormGroup({});
    for (let field of fields) {
      if (field.store) {
        this.stores[field.store]= this.storeService.getState(field.store);
      }

      const formControl = new FormControl(field.value);
      this.formGroup.addControl(field.name, formControl);

      //any other field depends on this field
      if (parentFields.has(field.name)) {
        // formControl.valueChanges.subscribe((value) =>
        //   this.valueChanged(field.name, value)
        // );
        this.parentValues[field.name]=formControl.valueChanges;
      }
    }

    console.log(this.formGroup,this.stores);
  }

  valueChanged(name: string, value: any): void {
    this.parentValues[name] = value;
    console.log(name, value);
  }
}
