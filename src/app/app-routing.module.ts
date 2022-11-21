import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { PhotosComponent } from './photos/photos.component';

const routes: Routes = [
  {path: '', component: PhotosComponent},
  {path: 'favourites', component: FavouritesComponent},
  {path: 'albums', component: AlbumsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
