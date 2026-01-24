import { Component,inject } from '@angular/core';
import { Footer } from '../footer/footer';
import { FormBuilder, ReactiveFormsModule,FormGroup, Validators } from '@angular/forms';
import { ApiServices } from '../services/api-services';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  imports: [Footer,ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  registerForm:FormGroup
  fb = inject(FormBuilder)
  api = inject(ApiServices)
  router = inject(Router)

  constructor(){
    this.registerForm = this.fb.group({
      username:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
    })
  }

  register(){
    if(this.registerForm.valid){
      const username = this.registerForm.value.username
      const email = this.registerForm.value.email
      const password = this.registerForm.value.password
      this.api.registerAPI({username,email,password}).subscribe({
        next:(res:any)=>{
          alert("User registration successfull...")
          this.registerForm.reset()
          setTimeout(()=>{
            this.router.navigateByUrl('/login')
          },2000)
        },
        error:(reason:any)=>{
          alert(reason.error);
          this.registerForm.reset()

          setTimeout(()=>{
            this.router.navigateByUrl('/login')
          },2000)
        }
      })
    }else{
      alert("Invalid Inputs...")
    }
  }
}
