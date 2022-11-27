import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, Subscription } from 'rxjs';
import { IPhoto } from 'src/interfaces/photo.interface';
import { AppService } from '../../../services/app.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  favourites!: Subscription
  cols = 4;
  constructor(public appService: AppService, private breakpointObserver: BreakpointObserver){
  }
  

  ngOnInit(): void {
    this.appService.getPhotos();

    this.breakpointObserver.observe([
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XSmall
    ]).subscribe((result: BreakpointState) => {
      let cols;
      if (result.breakpoints[Breakpoints.Small]) {
        cols = 2;
      } else if(result.breakpoints[Breakpoints.Medium]) {
        cols = 3;
      } else if(result.breakpoints[Breakpoints.XSmall]){
        cols = 1;
      } else {
        cols = 4
      }

      this.cols = cols
    });
  }
}
