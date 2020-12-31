import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  // component receives data information, that will tell it was statistics it should display
  @Input() data = [];
  constructor() { }

  ngOnInit(): void {
  }

}
