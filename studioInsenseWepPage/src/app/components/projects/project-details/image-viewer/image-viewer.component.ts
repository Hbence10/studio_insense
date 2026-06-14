import { Component, inject } from '@angular/core';
import { FrontendService } from '../../../../services/frontend.service';

@Component({
  selector: 'app-image-viewer',
  imports: [],
  templateUrl: './image-viewer.component.html',
  styleUrl: './image-viewer.component.scss',
})
export class ImageViewerComponent {
  frontendService = inject(FrontendService)
}
