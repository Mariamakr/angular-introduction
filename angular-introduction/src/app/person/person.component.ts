import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from '../interfaces/person';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
    
  @Input() person: Person ={
    givenName: "The person's first name",
    surName: "The persons last name",
    age: 0,
    email:"The persons email",
    address: " The person's address"
  }
}