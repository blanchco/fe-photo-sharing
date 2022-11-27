import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppService } from '../../../services/app.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {

  constructor(private appService: AppService, private snackbar: MatSnackBar){
  }

  uploadFiles(event: Event) {
    const target = event.target as HTMLInputElement;
    if(target.files){
      const file: File = target.files[0]

      let formData = new FormData();
      for (let i = 0; i<target.files.length; i++){
        formData.append("image", target.files[i])
      }

      
      this.appService.uploadPhoto(formData).subscribe(()=>{
        this.snackbar.open('Uploaded Photo', 'Dismiss', {duration: 5000})
        this.appService.getPhotos()
      })
    }
  }
}
