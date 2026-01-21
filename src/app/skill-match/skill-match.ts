import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill-match',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-match.html',
  styleUrl: './skill-match.css'
})
export class SkillMatchComponent {

  // Simulated extracted skills from resume
  resumeSkills = ['HTML', 'CSS', 'JavaScript', 'Angular'];

  // Required skills for a job
  jobSkills = ['HTML', 'CSS', 'JavaScript', 'Angular', 'TypeScript', 'Git'];

  matchedSkills: string[] = [];
  missingSkills: string[] = [];
  matchPercentage = 0;

  ngOnInit() {
    this.calculateMatch();
  }

  calculateMatch() {
    this.matchedSkills = this.jobSkills.filter(skill =>
      this.resumeSkills.includes(skill)
    );

    this.missingSkills = this.jobSkills.filter(skill =>
      !this.resumeSkills.includes(skill)
    );

    this.matchPercentage = Math.round(
      (this.matchedSkills.length / this.jobSkills.length) * 100
    );
  }
}
