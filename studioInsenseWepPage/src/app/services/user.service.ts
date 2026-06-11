import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient)
  baseUrl: string = "http://localhost:8080/users"
  loggedUser: User | null = null

  login(userDetails: {email: string, password: string}): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/login`, userDetails)
  }
}
