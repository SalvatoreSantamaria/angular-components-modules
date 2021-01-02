import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {

  //boolean to open/close modal
  modalOpen = false;
  items = [
    { title: 'Title 1', content: 'Content 1' },
    { title: 'Title 2', content: 'Content 2' },
    { title: 'Title 3', content: 'Content 3' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    // toggles modal to be whatever it is not
    this.modalOpen = !this.modalOpen;
  }
}
