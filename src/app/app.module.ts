import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { PhotosComponent } from './pages/photos/photos.component';
import { FavouritesComponent } from './pages/favourites/favourites.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { PhotoComponent } from './components/photo/photo.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './pages/auth/auth.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptorProvider } from './auth.interceptor';
import { HomeComponent } from './pages/home/home.component';
import {MatCardModule} from '@angular/material/card'
import {MatTabsModule} from '@angular/material/tabs';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LightboxModule } from 'ngx-lightbox';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    FavouritesComponent,
    PhotoComponent,
    DeleteModalComponent,
    FileUploadComponent,
    AuthComponent,
    HomeComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTabsModule,
    MatSnackBarModule,
    LightboxModule,
    LayoutModule
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
