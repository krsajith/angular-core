import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicFormComponent } from './core/dynamic-form/dynamic-form.component';
import { ComponentHostDirective } from './core/component-host.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { ParentFilterPipe } from './core/pipe/parent-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    ComponentHostDirective,
    ParentFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
