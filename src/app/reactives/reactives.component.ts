import { Component } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-reactives',
  templateUrl: './reactives.component.html',
  styleUrls: ['./reactives.component.css']
})
export class ReactivesComponent {
  reactiveForm= new FormGroup({
    un: new FormControl(''),
    pwd: new FormControl('')
  })


  eventfun()
  {
    console.warn(this.reactiveForm.value)
  }
get un()
{
  return this.reactiveForm.get('username')
}
get pwd()
{
  return this.reactiveForm.get('password')
}
constructor(public route:Router){}
eventhappens()
{
  this.route.navigateByUrl('reactives/forms')
}
}
