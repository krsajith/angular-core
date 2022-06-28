import { Component, OnInit, ViewChild } from '@angular/core';
import { ComponentHostDirective } from './core/component-host.directive';
import { DynamicFormComponent } from './core/dynamic-form/dynamic-form.component';
import { Page } from "src/app/core/domain/page";
import { firstValueFrom } from 'rxjs';
import { JsonService } from './core/api/json.service';
import { PopupComponent } from './popup/popup.component';
import { RedComponent } from './sample/red/red.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-dynamic-page';

  @ViewChild(ComponentHostDirective, { static: true }) componentHost!: ComponentHostDirective;

  @ViewChild(PopupComponent, { static: true }) popup!: PopupComponent;

  constructor(private jsonService: JsonService) {

  }

  ngOnInit(): void {
    // this.init();

    // this.popup.show(RedComponent);

  }


  async init() {
    const viewContainerRef = this.componentHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<DynamicFormComponent>(DynamicFormComponent);
    const page = await firstValueFrom(this.jsonService.get<Page>('/assets/application/pages/sample-page.json'));

    componentRef.instance.init(page);
  }

  showPopup() {
    this.popup.show(RedComponent)
  }

}