import { Component, inject } from '@angular/core';
import { FrontendService } from '../../services/frontend.service';
import { RouterModule } from '@angular/router';
import { MatAnchor } from "@angular/material/button";

@Component({
  selector: 'app-unauthorized',
  imports: [RouterModule, MatAnchor],
  templateUrl: './unauthorized.component.html',
  styleUrl: './unauthorized.component.scss',
})
export class UnauthorizedComponent {
  frontendService = inject(FrontendService)
}
