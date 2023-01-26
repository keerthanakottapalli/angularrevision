import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: '{{msgToChild}}',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() msgToChild:string=" ";
}
