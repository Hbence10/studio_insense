import { FrontendService } from './../../services/frontend.service';
import { Component, inject, OnInit, signal } from '@angular/core';
import { UserService } from '../../services/user.service';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  private userService = inject(UserService)
  private router = inject(Router)
  frontendService = inject(FrontendService)
  form!: FormGroup
  errorMsg: string = ""
  hide = signal(true);

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required])
    })
  }

  login() {
    this.userService.login({email: this.form.controls["email"].value, password: this.form.controls["password"].value}).subscribe({
      next: (response) => {
        this.userService.loggedUser = response
      },
      error: (error) => {

      },
      complete: () => {
        this.router.navigate(["/project"])
      }
    })
  }

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
}
