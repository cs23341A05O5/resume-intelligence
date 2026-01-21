import { Routes } from '@angular/router';

import { HomeComponent } from './home/home';
import { ResumeUploadComponent } from './resume-upload/resume-upload';
import { SkillMatchComponent } from './skill-match/skill-match';
import { ApplicationTrackerComponent } from './application-tracker/application-tracker';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'upload', component: ResumeUploadComponent },
  { path: 'match', component: SkillMatchComponent },
  { path: 'tracker', component: ApplicationTrackerComponent }
];
