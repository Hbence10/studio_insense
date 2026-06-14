import { Component, inject } from '@angular/core';
import { FrontendService } from '../../../services/frontend.service';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  frontendService = inject(FrontendService)
}
