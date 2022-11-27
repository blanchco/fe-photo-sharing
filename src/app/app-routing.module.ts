import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AuthComponent } from './pages/auth/auth.component';
import { FavouritesComponent } from './pages/favourites/favourites.component';
import { HomeComponent } from './pages/home/home.component';
import { PhotosComponent } from './pages/photos/photos.component';

const routes: Routes = [
  {path: 'login', component: AuthComponent},
  {path: '', canActivate: [AuthGuard], component: HomeComponent,
    children: [
      { path: '', canActivate: [AuthGuard], component: PhotosComponent },
      { path: 'favourites', canActivate: [AuthGuard], component: FavouritesComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
