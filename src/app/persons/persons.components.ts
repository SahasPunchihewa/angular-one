import { Component,Input } from '@angular/core';

@Component({
  selector:'app-persons',
  templateUrl:'./persons.components.html'
})
export class PersonsComponent
{
  @Input() personsList:String[];
}
