import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/core/domain/page';
import { Field } from 'src/app/core/domain/field';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
})
export class DynamicFormComponent implements OnInit {
  ready = false;
  formGroup!:FormGroup;
  page!: Page;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log('DynamicFormComponent.ngOnInit()');
  }

  async init(page: Page) {
    this.page=page;
    await this.buildForm(page.fields);
    this.ready = true;
  }

  private async buildForm(fields:Field[]) {
    this.formGroup = new FormGroup({});
    for (let field of fields) {
      const formControl = new FormControl();
      this.formGroup.addControl(field.name, formControl);
    }
    console.log(this.formGroup);
  }
}
