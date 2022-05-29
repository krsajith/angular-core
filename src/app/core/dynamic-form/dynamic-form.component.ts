import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  name!:string;
  
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    console.log('DynamicFormComponent.ngOnInit()');
  }


  init() {
    console.log('DynamicFormComponent.init()');
    setTimeout(() => {
      this.name = 'John';
    }, 5000);
  }
}
