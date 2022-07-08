import { Component, OnInit, ViewChild } from '@angular/core';
import { ComponentHostDirective } from './core/component-host.directive';
import { DynamicFormComponent } from './core/dynamic-form/dynamic-form.component';
import { Page } from "src/app/core/domain/page";
import { firstValueFrom } from 'rxjs';
import { JsonService } from './core/api/json.service';
import { PopupComponent } from './popup/popup.component';
import { RedComponent } from './sample/red/red.component';
import { SelectionModel } from '@angular/cdk/collections'
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-dynamic-page';

  @ViewChild(ComponentHostDirective, { static: true }) componentHost!: ComponentHostDirective;

  @ViewChild(PopupComponent, { static: true }) popup!: PopupComponent;

  model = new SelectionModel(true);

  data = { id: 1, name: 'sajith' };

  selection = [];

  options = [
    { value: '1', label: 'One' },
    { value: '2', label: 'Two' },
    { value: '3', label: 'Three' },
    { value: '4', label: 'Four' },
    { value: '5', label: 'Five' },
    { value: '6', label: 'Six' },
  ]

  constructor(private jsonService: JsonService) {

  }

  ngOnInit(): void {
    this.init();

    // this.popup.show(RedComponent);

    const model = new SelectionModel(false);

    model.changed.subscribe(() => {
      console.log(model.selected);
    });


    model.toggle("1");
    model.toggle("8");
    model.toggle("1");
    // console.log(model.selected);



  }


  async init() {
    this.jsonService.http.get('/assets/application/pages/sample-page.js', {
      responseType: 'text',
    }).subscribe(text => {
      console.log(text);
    });


    const viewContainerRef = this.componentHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<DynamicFormComponent>(DynamicFormComponent);
    const page = await firstValueFrom(this.jsonService.get<Page>('/assets/application/pages/sample-page.json'));

    componentRef.instance.init(page);
  }

  showPopup() {
    this.popup.show(RedComponent)
  }

  test($event: any) {
    this.model.toggle(this.data);
  }

}