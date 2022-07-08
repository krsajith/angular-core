import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-td]',
  templateUrl: './td.component.html',
  styleUrls: ['./td.component.css']
})
export class TdComponent implements OnInit {

  @Input() colSpan='1';

  constructor() { }

  ngOnInit(): void {
  }

}
