import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MovieResolver, MoviesResolver} from "./services";
import {MoviesComponent} from "./components/movies/movies.component";
import {MovieDetailsComponent} from "./components/movie-details/movie-details.component";

const routes: Routes = [
  {
    path: '', component: MoviesComponent,
    resolve: {data: MoviesResolver}
  },
  {path: ':id', component: MovieDetailsComponent, resolve: {data: MovieResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule {
}
