import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Lightbox } from 'ngx-lightbox';
import { IPhoto } from 'src/interfaces/photo.interface';
import { AppService } from 'src/services/app.service';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent {
  @Input()
  photo!: IPhoto

  constructor(public dialog: MatDialog, private lightbox: Lightbox, private appService: AppService){}

  deleteDialog(){
    const dialogRef = this.dialog.open(DeleteModalComponent,  
      { 
        data: {
          photo: this.photo
        }
      }
    )
  }

  openPhoto(){
    this.lightbox.open([{src: 'http://localhost:3000/' + this.photo.image, thumb: 'http://localhost:3000/' + this.photo.image }])
  }

  favouritePhoto(){
    this.appService.favourite(this.photo._id).subscribe()
  }

}
