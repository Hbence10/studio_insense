import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  languageService = inject(LanguageService)
  cookieService = inject(CookieService)
}
