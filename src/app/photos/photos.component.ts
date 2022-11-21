import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  photos: any = [];
  constructor(public appService: AppService){

  }

  ngOnInit(): void {

    this.appService.getPhotos().subscribe((res) =>{
      this.photos = res
    })
  }




}
