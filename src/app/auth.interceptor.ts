import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { catchError, Observable, switchMap, throwError } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthenticationService) {}

  // Interceptor to add auth headers to requests
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      headers: request.headers.set('authorization','Bearer ' + this.authService.token)
    })
    return next.handle(request).pipe(catchError((error: HttpErrorResponse) => {
      // If response is unauthorized, refresh to get a new auth token
      if(error.status === 401 && this.authService.token){
        return this.authService.refresh().pipe(
          switchMap((res: any) => {
            this.authService.token = res.accessToken
            const headers = new HttpHeaders({
              'Authorization': 'Bearer ' + this.authService.token,
              'Access-Control-Allow-Credentials': 'true'
            });
            return next.handle(request = request.clone({headers}))
          })
        )
      }
      return throwError(() => error)
    }));
  }
}

export const AuthInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
}
