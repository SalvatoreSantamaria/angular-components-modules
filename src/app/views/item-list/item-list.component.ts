import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  // Adding Images 3: component receives property images information, that will tell it what images it should display
  @Input() images = [];
  constructor() { }

  ngOnInit(): void {
  }

}
