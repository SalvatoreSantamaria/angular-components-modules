import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css']
})
export class PlaceholderComponent implements OnInit {

  // properties that are set by the parent component
  @Input() header = true;
  @Input() lines = 4

  constructor() { }

  ngOnInit(): void {
  }

}
