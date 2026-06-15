import { Component, inject } from '@angular/core';
import { FrontendService } from '../../services/frontend.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
})
export class NotFoundComponent {
  frontendService = inject(FrontendService)
}
