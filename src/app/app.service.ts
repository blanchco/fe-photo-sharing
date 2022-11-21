import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(public httpClient: HttpClient) { 

  }
  getPhotos(): Observable<any> {
      return this.httpClient.get('http://localhost:3000/photo')
  }

  uploadPhoto(formData: FormData): Observable<any> {
    return this.httpClient.post('http://localhost:3000/photo/upload', formData)
  }
}
