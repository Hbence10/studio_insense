import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  private langaugeService = inject(LanguageService)
  userService = inject(UserService)

  changeLanguage() {
    this.langaugeService.changeLanguage()
  }
}
