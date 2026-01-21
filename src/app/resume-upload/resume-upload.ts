import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeDataService } from '../shared/resume-data.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-resume-upload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume-upload.html',
  styleUrl: './resume-upload.css'
})
export class ResumeUploadComponent {

  selectedFile: File | null = null;

  constructor(
    private resumeService: ResumeDataService,
    private router: Router
  ) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  analyzeResume() {
    // 🔹 Simulated extraction logic
    const extractedSkills = [
      'HTML',
      'CSS',
      'JavaScript',
      'Angular'
    ];

    // store in service
    this.resumeService.setSkills(extractedSkills);

    // navigate to skill match page
    this.router.navigate(['/match']);
  }
}
