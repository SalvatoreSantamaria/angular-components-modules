import { componentFactoryName } from '@angular/compiler';
import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';

// ElementRef gives us access to the host element of the component

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  //event we are watching for on the parent component- it is an intance for new EventEmitter
  @Output() close = new EventEmitter
  
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

  onCloseClick() {
    //this also works (i just jammed this in here to see if it would)
    // document.body.removeChild(this.el.nativeElement)

    this.close.emit();
  }

}
