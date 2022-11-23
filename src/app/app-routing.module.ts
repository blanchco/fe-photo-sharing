import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { AuthGuard } from './auth.guard';
import { AuthComponent } from './auth/auth.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { PhotosComponent } from './photos/photos.component';

const routes: Routes = [
  {path: '', component: PhotosComponent, canActivate: [AuthGuard]},
  {path: 'login', component: AuthComponent},
  {path: 'favourites', component: FavouritesComponent, canActivate: [AuthGuard]},
  {path: 'albums', component: AlbumsComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
