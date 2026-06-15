import { Component, inject } from '@angular/core';
import { FrontendService } from '../../services/frontend.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-unauthorized',
  imports: [RouterModule],
  templateUrl: './unauthorized.component.html',
  styleUrl: './unauthorized.component.scss',
})
export class UnauthorizedComponent {
  frontendService = inject(FrontendService)
}
