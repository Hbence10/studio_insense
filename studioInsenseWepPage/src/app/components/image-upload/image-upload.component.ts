import { Component, computed, effect, inject, OnDestroy, signal } from '@angular/core';
import { ProjectService } from '../../services/project.service';

interface UploadedImage {
  id: string;
  file: File;
  url: string; // object URL a megjelenítéshez
}

@Component({
  selector: 'app-image-upload',
  standalone: true,
  templateUrl: './image-upload.component.html',
  styleUrl: './image-upload.component.scss',
})
export class ImageUploadComponent implements OnDestroy {
  images = signal<UploadedImage[]>([]);
  selected = signal<UploadedImage | null>(null);
  isDragging = signal(false);
  projectService = inject(ProjectService)

  // Kattintásos feltöltés
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.addFiles(input.files);
    }
    input.value = ''; // így ugyanazt a fájlt újra ki lehet választani
  }

  // Drag & drop
  onDragOver(event: DragEvent): void {
    event.preventDefault(); // enélkül a böngésző megnyitná a képet
    this.isDragging.set(true);
  }

  onDragLeave(): void {
    this.isDragging.set(false);
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    this.isDragging.set(false);
    if (event.dataTransfer?.files) {
      this.addFiles(event.dataTransfer.files);
    }
  }

  private addFiles(files: FileList): void {
    const newImages = Array.from(files)
      .filter((f) => f.type.startsWith('image/'))
      .map((file) => ({
        id: crypto.randomUUID(),
        file,
        url: URL.createObjectURL(file),
      }));

    this.images.update((list) => [...list, ...newImages]);
    this.projectService.uploadedImages.update((list) => [...list, ...newImages.map(img => img.file)])
  }

  openPreview(image: UploadedImage): void {
    this.selected.set(image);
  }

  closePreview(): void {
    this.selected.set(null);
  }

  removeImage(image: UploadedImage, event: MouseEvent): void {
    event.stopPropagation(); // ne nyíljon meg az előnézet is
    URL.revokeObjectURL(image.url); // memória felszabadítása
    this.images.update((list) => list.filter((i) => i.id !== image.id));

    if (this.selected()?.id === image.id) {
      this.closePreview();
    }
  }

  ngOnDestroy(): void {
    this.images().forEach((i) => URL.revokeObjectURL(i.url));
  }
}
