import { Component, inject } from '@angular/core';
import { FrontendService } from '../../../services/frontend.service';

@Component({
  selector: 'app-project-details',
  imports: [],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss',
})
export class ProjectDetailsComponent {
  frontendService = inject(FrontendService)
}
