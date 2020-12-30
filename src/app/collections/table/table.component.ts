import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  //classNames = ''; used to pass through some classnames that will be applied to an element inside a component.
  @Input() classNames = '';

  @Input() data = [];
  @Input() headers = [];

  constructor() { }

  ngOnInit(): void {
  }

}
