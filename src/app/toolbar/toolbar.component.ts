import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  constructor(public authService: AuthenticationService){}

  logout() {
    this.authService.logout().subscribe((res) => {
      console.log(res);
    });
  }
}
