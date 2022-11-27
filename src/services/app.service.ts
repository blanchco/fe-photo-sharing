import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subscription, tap } from 'rxjs';
import { IPhoto } from 'src/interfaces/photo.interface';

const BASE_URL = 'http://localhost:3000'
@Injectable({
  providedIn: 'root'
})
export class AppService {

  private photosSubject = new BehaviorSubject<IPhoto[]>([]) 

  public photos$: Observable<IPhoto[]> = this.photosSubject.asObservable()

  constructor(private httpClient: HttpClient) { 

  }
  getPhotos(): Subscription {
      return this.httpClient.get(BASE_URL + '/photo').pipe((
        tap((res: any) => this.photosSubject.next(res))
      )).subscribe();
  }

  uploadPhoto(formData: FormData): Observable<any> {
    return this.httpClient.post(BASE_URL + '/photo/upload', formData);
  }

  deletePhoto(id: string): Observable<any> {
    return this.httpClient.delete(BASE_URL + `/photo/${id}/delete`);
  }

  
  favourite(id: string): Observable<any> {
    return this.httpClient.patch(BASE_URL + `/photo/${id}/favourite`, {}).pipe((
      tap((res: any) => {
        let index = this.photosSubject.value.findIndex(photo => photo._id == res.photo._id);
        const photos = this.photosSubject.value;
        photos.splice(index, 1, res.photo);
        this.photosSubject.next(photos);
      })
    ))
  }

  initializeState() {
    this.photosSubject.next([])
  }
}
