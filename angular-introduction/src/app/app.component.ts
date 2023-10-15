import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Person } from './interfaces/person';
//import { PersonAlt } from './interfaces/person-alt';

import { PersonAltComponent } from './person-alt/person-alt.component';
import { PersonComponent } from './person/person.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PersonComponent, PersonAltComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  name: string = "Maria!";


  person: Person = {
    givenName:'Maria',
    surName: 'Makrygianni',
    age: 0X19,
    email:'makrygianni.maria@gmail.com',
    address: 'Athens, Greece'
  }

  person2: Person = {
    givenName:'Alexandros',
    surName: 'Makrygiannis',
    age: 0X30,
    email:'makrygianni.maria@gmail.com',
    address: 'Athens, Greece'
  }
}
