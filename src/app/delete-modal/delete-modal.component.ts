import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { IPhoto } from 'src/interfaces/photo.interface';
import { AppService } from '../app.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {photo: IPhoto},
    private appService: AppService
  ){}
  
  deleteFile() {
    this.appService.deletePhoto(this.data.photo._id).subscribe(() => {
      
    })
  }
}
