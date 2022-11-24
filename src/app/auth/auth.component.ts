import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  loginForm!: FormGroup
  registerForm!: FormGroup
  constructor(private authService: AuthenticationService){}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(null),
      password: new FormControl(null)
    })

    this.registerForm = new FormGroup({
      username: new FormControl(null),
      password: new FormControl(null)
    })
  }
  
  login(){
    if(this.loginForm.status === 'VALID'){
      const user = {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password
      }

      this.authService.login(user)
    }
  }

  register(){
    if(this.registerForm.status === 'VALID'){
      const user = {
        username: this.registerForm.value.username,
        password: this.registerForm.value.password
      }

      this.authService.registerUser(user).subscribe((res) => {
        console.log(res)
      })
    }
  }
}
