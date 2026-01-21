import { Component } from '@angular/core';
import { HomeComponent } from './home/home';
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { ResumeUpload } from './resume-upload/resume-upload';
import { SkillMatch } from './skill-match/skill-match';
import { ApplicationTracker } from './application-tracker/application-tracker';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, Header, Footer,ResumeUpload, SkillMatch,ApplicationTracker],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
