import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IPhoto } from 'src/interfaces/photo.interface';
import { AppService } from '../../../services/app.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {photo: IPhoto},
    private appService: AppService,
    private snackbar: MatSnackBar
  ){}
  
  deleteFile() {
    this.appService.deletePhoto(this.data.photo._id).subscribe(() => {
      this.snackbar.open('Deleted Photo', 'Dismiss', {duration: 5000})
      this.appService.getPhotos()
    })
  }
}
