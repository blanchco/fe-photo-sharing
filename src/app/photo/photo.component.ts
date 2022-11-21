import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent {
  @Input()
  src: any

  constructor(public dialog: MatDialog){}

  deleteDialog(){
    const dialogRef = this.dialog.open(DeleteModalComponent)
  }

}
