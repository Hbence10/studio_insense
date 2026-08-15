import { inject, Injectable } from '@angular/core';
import { CanMatch, RedirectCommand, Route, Router, UrlSegment } from '@angular/router';
import { UserService } from '../services/user.service';
@Injectable({
  providedIn: "root"
})
export class RoleGuard implements CanMatch {
  userService = inject(UserService)
  router = inject(Router)

  canMatch(route: Route, segments: UrlSegment[]) {
    let data = route.data as { roles: string[] }

    if (this.userService.loggedUser?.role.name! === "ROLE_admin") {
      return true
    }

    return new RedirectCommand(this.router.parseUrl("/unauthorized"))
  }
}
