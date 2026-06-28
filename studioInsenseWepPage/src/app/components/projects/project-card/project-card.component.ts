import { Component, inject, input } from '@angular/core';
import { FrontendService } from '../../../services/frontend.service';
import { Project } from '../../../models/project.model';
import { Router } from '@angular/router';
import { LanguageService } from '../../../services/language.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  languageService = inject(LanguageService)
  cookieService = inject(CookieService)
  project = input.required<Project>()
  private router = inject(Router)

  checkDetails() {
    this.router.navigate(["/project", this.project().id])
  }
}
