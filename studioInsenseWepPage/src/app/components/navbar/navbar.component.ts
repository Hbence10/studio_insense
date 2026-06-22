import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FrontendService } from '../../services/frontend.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  private frontendService = inject(FrontendService)
  userService = inject(UserService)

  changeLanguage() {

  }
}
