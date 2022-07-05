import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/core/domain/page';
import { Field } from 'src/app/core/domain/field';
import { FormControl, FormGroup } from '@angular/forms';
import { StoreService } from '../store/store.service';
import { Store } from '../store/store';
import { EMPTY, filter, map, Observable } from 'rxjs';

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
  values: { [k: string]: Observable<any> } = {};
  parentValueChanges: { [k: string]: Observable<string> } = {};

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    console.log('DynamicFormComponent.ngOnInit()');
  }

  async init(page: Page) {
    this.page = page;
    await this.buildForm(page.fields);
    this.ready = true;
  }

  private async buildForm(fields: Field[]) {
    console.table(fields);
    const parentFields = new Set(
      fields
        .filter((field) => field.parentField !== undefined)
        .map((field) => field.parentField)
    );

    this.formGroup = new FormGroup({});
    for (let field of fields) {
      if (field.store) {
        this.stores[field.name] = this.storeService.getState(field.store);
        this.values[field.name] = field.parentField ? EMPTY : this.storeService.getState(field.store).values;
      }

      const formControl = new FormControl(field.value);
      this.formGroup.addControl(field.name, formControl);

      //any other field depends on this field
      if (parentFields.has(field.name)) {
        this.parentValueChanges[field.name] = formControl.valueChanges;
      }
    }

    fields.filter(field => field.parentField).forEach(field => {
      this.parentValueChanges[field.parentField].subscribe(parentValue => {
        this.values[field.name] = this.stores[field.name].values.pipe(
          map(items =>
            items.filter(item => item[field.joinColumn] === parentValue)))

            let fieldValue:any = {};
            fieldValue[field.name]=undefined;
            this.formGroup.patchValue(fieldValue);
      });

    })
  }
}
