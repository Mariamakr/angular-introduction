import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-person-alt',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person-alt.component.html',
  styleUrls: ['./person-alt.component.css']
})
export class PersonAltComponent {
  @Input() person: PersonAltComponent = {
    givenName: "The person's first name",
    surName: "The persons last name",
    age: 0,
    email:"The persons email",
    address: " The person's address"
  }
}
