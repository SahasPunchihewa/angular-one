import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector:'app-person-input',
  templateUrl:'./person-input.component.html',
  styleUrls:['./person-input.component.css']
})

export class PersonInputComponent
{
  @Output() PersonCreate=new EventEmitter<String>();
  EnterdPersonName='';
  OnCreatePerson()
  {
    console.log('created a person : '+this.EnterdPersonName);
    this.PersonCreate.emit(this.EnterdPersonName);
    this.EnterdPersonName='';
  }
}
