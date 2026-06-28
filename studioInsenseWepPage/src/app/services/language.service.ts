import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Language } from '../models/language.model';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
@Injectable({ providedIn: 'root' })
export class LanguageService {
  selectedLanguage!: Language;
  private http = inject(HttpClient);
  private platformId = inject(PLATFORM_ID);
  private cookieService = inject(CookieService)

  private get isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  getLanguage(): void {
    const wantedLanguage = this.cookieService.get("studioInsenseSelectedLanguage") || "hun"
    this.cookieService.set("studioInsenseSelectedLanguage", wantedLanguage)

    this.http.get<Language>(`assets/${wantedLanguage}Text.json`).subscribe({
      next: response => this.selectedLanguage = response,
      complete: () => {
        console.log(this.selectedLanguage)
      }
    });
  }

  changeLanguage(): void {
    let wantedLanguage: string = this.selectedLanguage.language == "hun" ? "eng" : "hun";
    this.cookieService.set("studioInsenseSelectedLanguage", wantedLanguage)
    this.getLanguage();
  }
}
