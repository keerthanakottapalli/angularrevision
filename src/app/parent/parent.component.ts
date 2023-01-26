import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: '<app-child [msgToChild]="msgFromParent"></app-child>',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
msgFromParent="message from parent"
}
