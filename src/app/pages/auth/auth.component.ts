import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  loginForm!: FormGroup
  registerForm!: FormGroup
  constructor(private authService: AuthenticationService, private snackbar: MatSnackBar){}

  ngOnInit(): void {
    if(this.authService.isLoggedIn$){
      this.authService.logout().subscribe()
    }
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

      this.authService.login(user).subscribe(
        res => {
          console.log(res)
        }, 
        error => {
        this.snackbar.open('Invalid Details', 'Dismiss', {duration: 5000})
        })
      }
  }

  register(){
    if(this.registerForm.status === 'VALID'){
      const user = {
        username: this.registerForm.value.username,
        password: this.registerForm.value.password
      }

      this.authService.registerUser(user).subscribe((res) => {
        this.snackbar.open(`Registered User ${user.username}`, 'Dismiss', {duration: 5000})
        console.log(res)
      })
    }
  }
}
