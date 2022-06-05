import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {NgxStarRatingModule} from "ngx-star-rating";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {MovieRoutingModule} from './movie-routing.module';
import {MoviesComponent} from './components/movies/movies.component';
import {MovieComponent} from './components/movie/movie.component';
import {MainInterceptor} from "../../main.interceptor";
import {MovieService} from "./services";
import {MoviesResolver} from "./services/resolvers/movies.resolver";
import {MovieResolver} from "./services/resolvers/movie.resolver";
import {MovieDetailsComponent} from './components/movie-details/movie-details.component';
import {GenresComponent} from "./components/genres/genres.component";
import {GenreService} from "./services/genre.service";
import {GenreComponent} from "./components/genre/genre.component";
import {NgbRatingModule} from "@ng-bootstrap/ng-bootstrap";
import {RatingComponent} from './components/rating/rating.component';


@NgModule({
  declarations: [
    MoviesComponent,
    MovieComponent,
    MovieDetailsComponent,
    GenresComponent,
    GenreComponent,
    RatingComponent,
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
