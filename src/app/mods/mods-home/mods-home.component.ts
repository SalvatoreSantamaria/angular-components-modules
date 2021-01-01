import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {

  //boolean to open/close modal
  modalOpen = false;
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    // toggles modal to be whatever it is not
    this.modalOpen = !this.modalOpen;
  }
}
