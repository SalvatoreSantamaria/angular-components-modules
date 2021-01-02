import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  //going to receive a list of items
  @Input() items = []
  openedItemIndex = 0
  constructor() { }

  ngOnInit(): void {
  }


  onClick(index: number) {
    // update this.openedItemIndex to be the value of index
    if (index === this.openedItemIndex) {
      this.openedItemIndex = -1; //do no show anything as being active
    } else {
      this.openedItemIndex = index;
    }
  }
}
