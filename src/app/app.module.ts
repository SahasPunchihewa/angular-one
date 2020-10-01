import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PersonsComponent} from './persons/persons.components';
import { AppComponent } from './app.component';
import { PersonInputComponent } from './persons/person-input.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,PersonsComponent,PersonInputComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
