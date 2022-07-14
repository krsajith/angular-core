import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/core/domain/page';
import { Field } from 'src/app/core/domain/field';
import { FormControl, FormGroup } from '@angular/forms';
import { StoreService } from '../store/store.service';
import { Store } from '../store/store';
import { combineLatestWith, EMPTY, map, Observable } from 'rxjs';

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
      const formControl = this.createFormControl(field);
      if (parentFields.has(field.name)) {
        this.parentValueChanges[field.name] = formControl.valueChanges;
      }
    }
    this.addParentFilters(fields);
  }


  /**
   * Create form fields
   * @param field 
   * @returns Form control for given field definition
   */
  private createFormControl(field: Field) {
    const formControl = new FormControl(field.value);
    this.formGroup.addControl(field.name, formControl);

    if (field.store) {
      this.stores[field.name] = this.storeService.getState(field.store);
      this.values[field.name] = field.parentField ? EMPTY : this.storeService.getState(field.store).values$;
    }
    return formControl;
  }

  /**
   * TODO: support custom filters instead of the parent value filter
   * All fields depends on parent value , filter the values based on selected parent
   * @param fields 
   * 
   */
  private addParentFilters(fields: Field[]) {
    fields.filter(field => field.parentField).forEach(field => {
      this.adddParentFilter(field);
    });
  }

  private adddParentFilter(field: Field) {
    this.values[field.name] = this.stores[field.name].values$.pipe(
      combineLatestWith(this.parentValueChanges[field.parentField]),
      map(([items, parentValue]) => items.filter(item => item[field.joinColumn] === parentValue))
    );
  }
}
