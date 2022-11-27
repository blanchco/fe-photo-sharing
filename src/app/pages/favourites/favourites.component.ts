import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, Subscription } from 'rxjs';
import { IPhoto } from 'src/interfaces/photo.interface';
import { AppService } from 'src/services/app.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {
  favourites$!: Observable<IPhoto[]>
  cols = 4;
  constructor(public appService: AppService, private breakpointObserver: BreakpointObserver){
  }

  ngOnInit(): void {
    this.appService.getPhotos();

    this.favourites$ = this.appService.photos$.pipe(
      map(photos => photos.filter(photo => photo.favourite))
    )

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
