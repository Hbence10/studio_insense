import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  input,
  signal,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { buildLayout, GalleryItem } from './gallery.layout';

const FALLBACK_RATIO = 1.5;

/** Betölti a képet és visszaadja a képarányát (szélesség / magasság). */
function measure(src: string): Promise<number> {
  // SSR alatt nincs Image objektum
  if (typeof Image === 'undefined') return Promise.resolve(FALLBACK_RATIO);
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () =>
      resolve(
        img.naturalWidth && img.naturalHeight
          ? img.naturalWidth / img.naturalHeight
          : FALLBACK_RATIO,
      );
    img.onerror = () => resolve(FALLBACK_RATIO);
    img.src = src;
  });
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[style.--gap.px]': 'gap()',
    '[style.--max-width.px]': 'maxWidth()',
    '(document:keydown)': 'onKeydown($event)',
  },
})
export class GalleryComponent {
  /** A képek elérési útvonalai. */
  readonly images = input.required<string[]>();
  /** Térköz a képek között (px). */
  readonly gap = input(12);
  /** A galéria maximális szélessége (px); a komponens középre igazodik. */
  readonly maxWidth = input(900);
  /** Alt szöveg előtag (a sorszám hozzáfűződik). */
  readonly alt = input('Galéria kép');

  protected readonly items = signal<GalleryItem[]>([]);
  protected readonly loading = signal(true);
  protected readonly blocks = computed(() => buildLayout(this.items()));

  protected readonly activeIndex = signal<number | null>(null);
  protected readonly active = computed(() => {
    const i = this.activeIndex();
    return i === null ? null : (this.items()[i] ?? null);
  });

  private loadId = 0;

  constructor() {
    // Ha változik a lista, újramérjük a képarányokat.
    effect(() => {
      const srcs = this.images() ?? [];
      const id = ++this.loadId;
      Promise.all(
        srcs.map((src, index) => measure(src).then((ratio) => ({ src, ratio, index }))),
      ).then((items) => {
        if (id !== this.loadId) return; // időközben új lista érkezett
        this.items.set(items);
        this.loading.set(false);
      });
    });
  }

  protected open(index: number) {
    this.activeIndex.set(index);
  }

  protected close() {
    this.activeIndex.set(null);
  }

  protected step(dir: 1 | -1, event?: Event) {
    event?.stopPropagation();
    const n = this.items().length;
    const i = this.activeIndex();
    if (i === null || !n) return;
    this.activeIndex.set((i + dir + n) % n);
  }

  protected onKeydown(e: KeyboardEvent) {
    if (this.activeIndex() === null) return;
    if (e.key === 'Escape') this.close();
    else if (e.key === 'ArrowRight') this.step(1);
    else if (e.key === 'ArrowLeft') this.step(-1);
  }
}
