import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authForm!: FormGroup
  constructor(private authService: AuthenticationService){}

  ngOnInit(): void {
    this.authForm = new FormGroup({
      username: new FormControl(null),
      password: new FormControl(null)
    })
  }
  
  login(){


    const user = {
      username: this.authForm.value.username,
      password: this.authForm.value.password
    }

    this.authService.login(user)
  }
}
