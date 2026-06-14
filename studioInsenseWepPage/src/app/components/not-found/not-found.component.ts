import { Component, inject } from '@angular/core';
import { FrontendService } from '../../services/frontend.service';

@Component({
  selector: 'app-not-found',
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
})
export class NotFoundComponent {
  frontendService = inject(FrontendService)
}
