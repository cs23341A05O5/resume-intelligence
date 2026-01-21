import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResumeDataService {
  private resumeSkills: string[] = [];

  setSkills(skills: string[]) {
    this.resumeSkills = skills;
  }

  getSkills(): string[] {
    return this.resumeSkills;
  }
}
