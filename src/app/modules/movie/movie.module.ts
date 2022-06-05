import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {NgxStarRatingModule} from "ngx-star-rating";
import {NgbRatingModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {GenreService, MovieResolver, MovieService, MoviesResolver} from "./services";
import {MovieRoutingModule} from './movie-routing.module';
import {MainInterceptor} from "../../main.interceptor";
import {MoviesComponent} from './components/movies/movies.component';
import {MovieComponent} from './components/movie/movie.component';
import {MovieDetailsComponent} from './components/movie-details/movie-details.component';
import {GenresComponent} from "./components/genres/genres.component";
import {GenreComponent} from "./components/genre/genre.component";
import {RatingComponent} from './components/rating/rating.component';


@NgModule({
  declarations: [
    MoviesComponent,
    MovieComponent,
    MovieDetailsComponent,
    GenresComponent,
    GenreComponent,
    RatingComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    HttpClientModule,
    NgxStarRatingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbRatingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: MainInterceptor
    },
    MovieService,
    MoviesResolver,
    MovieResolver,
    GenreService
  ]
})
export class MovieModule {
}
