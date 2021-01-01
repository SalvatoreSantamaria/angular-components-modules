import { componentFactoryName } from '@angular/compiler';
import { Component, OnInit, ElementRef } from '@angular/core';

// ElementRef gives us access to the host element of the component

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private el: ElementRef) {
    console.log(this.el.nativeElement)
   }

  // this displays the modal as a direct child of the body element by appending directly to it
  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement)
  }

  // this removes the modal after navigating away from the modal.
  ngOnDestroy() {
    this.el.nativeElement.remove()
  }

}
