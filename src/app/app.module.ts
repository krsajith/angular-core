import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicFormComponent } from './core/dynamic-form/dynamic-form.component';
import { ComponentHostDirective } from './core/component-host.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParentFilterPipe } from './core/pipe/parent-filter.pipe';
import { PopupComponent } from './popup/popup.component';
import { RedComponent } from './sample/red/red.component';
import { MultiSelectComponent } from './core/multi-select/multi-select.component';
// import { OverlayModule } from '@angular/cdk/overlay';
import { ClickAwayDirective } from './core/directives/click-away.directive';
// import { ClickAwayDirective } from './core/directives/click-away.directive';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    ComponentHostDirective,
    ParentFilterPipe,
    PopupComponent,
    RedComponent,
    MultiSelectComponent,
    ClickAwayDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    // OverlayModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
