import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { AuthGuard } from './auth.guard';
import { AuthComponent } from './auth/auth.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { HomeComponent } from './home/home.component';
import { PhotosComponent } from './photos/photos.component';

const routes: Routes = [
  {path: 'login', component: AuthComponent},
  {path: '', canActivate: [AuthGuard], component: HomeComponent,
    children: [
      { path: '', canActivate: [AuthGuard], component: PhotosComponent },
      { path: 'favourites', canActivate: [AuthGuard], component: FavouritesComponent },
      { path: 'albums', canActivate: [AuthGuard], component: AlbumsComponent },
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
