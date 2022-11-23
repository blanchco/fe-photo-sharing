import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { IUser } from 'src/interfaces/user.interface';

const BASE_URL = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false)
  isLoggedIn$ = this._isLoggedIn$.asObservable()

  constructor(private httpClient: HttpClient, private router: Router) { 
    this._isLoggedIn$.next(!!this.token)
  }


  get token() {
    return localStorage.getItem('accessToken') || ''
  }

  set token(accessToken) {
    localStorage.setItem('accessToken', accessToken)
  }

  registerUser(user: IUser):Observable<any> {
    return this.httpClient.post(BASE_URL + '/auth/register', user)
  }

  login(user: IUser): any{
    this.httpClient.post(BASE_URL + '/auth/login', user, {withCredentials: true}).subscribe((res: any) => {
      this._isLoggedIn$.next(true)
      this.token = res.accessToken
      this.router.navigate([''])
    })
  }

  refresh(): Observable<any> {
    return this.httpClient.get(BASE_URL + '/auth/refresh', {withCredentials: true})
  }

  logout(): Observable<any> {
    return this.httpClient.delete(BASE_URL + '/auth/logout', {withCredentials: true}).pipe(
      tap((res) => {
        this._isLoggedIn$.next(false)
        localStorage.removeItem('accessToken')
        this.router.navigate(['login'])
        return res
      })
    )
  }


}
