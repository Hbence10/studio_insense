import { Component, inject } from '@angular/core';
import { FrontendService } from '../../services/frontend.service';

@Component({
  selector: 'app-publications',
  imports: [],
  templateUrl: './publications.component.html',
  styleUrl: './publications.component.scss',
})
export class PublicationsComponent {
  frontendService = inject(FrontendService)
}
