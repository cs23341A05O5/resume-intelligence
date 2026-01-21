import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-application-tracker',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './application-tracker.html',
  styleUrl: './application-tracker.css'
})
export class ApplicationTrackerComponent {

  applications = [
    { company: 'Google', role: 'Frontend Developer', status: 'Applied' }
  ];

  company = '';
  role = '';
  status = '';

  addApplication() {
    if (this.company && this.role && this.status) {
      this.applications.push({
        company: this.company,
        role: this.role,
        status: this.status
      });

      // clear form
      this.company = '';
      this.role = '';
      this.status = '';
    }
  }

  deleteApplication(index: number) {
    this.applications.splice(index, 1);
  }
}
