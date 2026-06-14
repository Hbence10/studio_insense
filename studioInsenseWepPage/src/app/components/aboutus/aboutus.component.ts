import { Component, inject } from '@angular/core';
import { FrontendService } from '../../services/frontend.service';

@Component({
  selector: 'app-aboutus',
  imports: [],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.scss',
})
export class AboutusComponent {
  frontendService = inject(FrontendService)
  showImage: boolean = false
}
