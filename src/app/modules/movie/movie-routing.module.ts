import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MoviesComponent} from "./components/movies/movies.component";
import {MoviesResolver} from "./services/resolvers/movies.resolver";
import {MovieDetailsComponent} from "./components/movie-details/movie-details.component";
import {MovieResolver} from "./services/resolvers/movie.resolver";

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
