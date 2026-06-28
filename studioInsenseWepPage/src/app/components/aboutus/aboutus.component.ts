import { Component, inject, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-aboutus',
  imports: [],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.scss',
})
export class AboutusComponent implements OnInit{
  showImage: boolean = false
  languageService = inject(LanguageService)
  cookieService = inject(CookieService)
  firstRun: boolean = false

  ngOnInit(): void {
    this.firstRun = true
  }
}
