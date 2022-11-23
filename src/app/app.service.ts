import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:3000'
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) { 

  }
  getPhotos(): Observable<any> {
      return this.httpClient.get(BASE_URL + '/photo')
  }

  uploadPhoto(formData: FormData): Observable<any> {
    return this.httpClient.post(BASE_URL + '/photo/upload', formData)
  }

  deletePhoto(id: string): Observable<any> {
    return this.httpClient.delete(BASE_URL + `/photo/${id}/delete`)
  }
}
