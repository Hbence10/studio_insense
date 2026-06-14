import { Component, inject } from '@angular/core';
import { FrontendService } from '../../services/frontend.service';

@Component({
  selector: 'app-unauthorized',
  imports: [],
  templateUrl: './unauthorized.component.html',
  styleUrl: './unauthorized.component.scss',
})
export class UnauthorizedComponent {
  frontendService = inject(FrontendService)
}
