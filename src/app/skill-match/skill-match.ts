import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-skill-match',
  imports: [CommonModule],
  templateUrl: './skill-match.html',
  styleUrl: './skill-match.css',
})
export class SkillMatch {
  matchedSkills = ['HTML', 'CSS', 'JavaScript'];

  missingSkills = ['Angular', 'TypeScript'];
}
export class SkillMatchComponent { }
