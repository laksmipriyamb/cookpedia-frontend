import { Component, inject } from '@angular/core';
import { Footer } from '../footer/footer';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiServices } from '../services/api-services';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  imports: [Footer, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  loginForm: FormGroup
  fb = inject(FormBuilder)
  api = inject(ApiServices)
  router = inject(Router)

  constructor() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]

    })
  }

  //login
  login() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email
      const password = this.loginForm.value.password
      this.api.loginAPI({ email, password }).subscribe({
        next: (res: any) => {
          sessionStorage.setItem("token", res.token)
          sessionStorage.setItem("user", JSON.stringify(res.user))
          alert("User login successfull...")
          this.loginForm.reset()
          setTimeout(() => {
            this.router.navigateByUrl('/')
          }, 2000)
        },
        error: (reason: any) => {
          alert(reason.error);
        }
      })
    } else {
      alert("Invalid Inputs...Please fill the form with valid data!!!")
    }
  }
}
