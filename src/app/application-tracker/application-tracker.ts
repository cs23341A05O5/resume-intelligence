import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-application-tracker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'application-tracker.html',
styleUrl: 'application-tracker.css',

})
export class ApplicationTrackerComponent {

  applications = [
    { company: 'Google', role: 'Frontend Developer', status: 'Applied' },
    { company: 'Amazon', role: 'Software Engineer', status: 'Interview Scheduled' },
    { company: 'Microsoft', role: 'Web Developer', status: 'Rejected' }
  ];

}
