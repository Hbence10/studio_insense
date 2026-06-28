import { Component, inject } from '@angular/core';
import { FrontendService } from '../../services/frontend.service';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-not-found',
  imports: [RouterModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
})
export class NotFoundComponent {
  languageService = inject(LanguageService)
  cookieService = inject(CookieService)
}
