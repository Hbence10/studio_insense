import { Component, inject } from '@angular/core';
import { FrontendService } from '../../services/frontend.service';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  frontendService = inject(FrontendService)
}
