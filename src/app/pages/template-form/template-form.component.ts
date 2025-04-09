import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css',
})
export class TemplateFormComponent {
  username: string = '';
  password: string = '';

  constructor() {}

  /**
   * submitform
   *
   * @param event
   */
  submitForm(event: Event) {
    event.preventDefault();
    console.log(`Form submitted: ${event}`);
    console.log(`Username: ${this.username} Password: ${this.password}`);
  }
}
