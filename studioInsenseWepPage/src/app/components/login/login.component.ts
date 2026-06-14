import { FrontendService } from './../../services/frontend.service';
import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  private userService = inject(UserService)
  private router = inject(Router)
  frontendService = inject(FrontendService)
  form!: FormGroup
  errorMsg: string = ""

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
}
