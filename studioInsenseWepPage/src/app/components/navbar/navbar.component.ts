import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FrontendService } from '../../services/frontend.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  frontendService = inject(FrontendService)
}
