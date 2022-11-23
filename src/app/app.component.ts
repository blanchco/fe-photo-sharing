import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fe-photo-sharing';

  constructor(private authService: AuthenticationService){}

  logout() {
    this.authService.logout().subscribe((res) => {
      console.log(res);
    });
  }
}
