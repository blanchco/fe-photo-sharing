import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {

  constructor(private appService: AppService){
  }

  uploadFiles(event: Event) {
    const target = event.target as HTMLInputElement;
    if(target.files){
      const file: File = target.files[0]

      let formData = new FormData();
      formData.set("name", file.name)
      formData.set("image", file)
      this.appService.uploadPhoto(formData).subscribe(()=>{
        console.log('success')
      })
    }
  }
}
