import { Component, inject } from '@angular/core';
import { FrontendService } from '../../services/frontend.service';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { CookieService } from 'ngx-cookie-service';
import { MatAnchor } from "@angular/material/button";

@Component({
  selector: 'app-not-found',
  imports: [RouterModule, MatAnchor],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
})
export class NotFoundComponent {
  languageService = inject(LanguageService)
  cookieService = inject(CookieService)
}
