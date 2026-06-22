import { Component, inject, input } from '@angular/core';
import { FrontendService } from '../../../../services/frontend.service';

@Component({
  selector: 'app-image-viewer',
  imports: [],
  templateUrl: './image-viewer.component.html',
  styleUrl: './image-viewer.component.scss',
})
export class ImageViewerComponent {
  frontendService = inject(FrontendService)
  images = input.required<string[]>()
  selectedImageIndex = input.required<number>()
}
