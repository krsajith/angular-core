import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/controls/base-conrol/base.component';


@Component({
  selector: 'app-red',
  templateUrl: './red.component.html',
  styleUrls: ['./red.component.css']
})
export class RedComponent extends BaseComponent implements OnInit {
  config: any;
  constructor(private http: HttpClient) {
    super();
  }

  ngOnInit(): void {
    console.log('RedComponent.ngOnInit',this.http);
  }

  override init(config:any){
    this.config=config; 
  }

}
