import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';

import {MovieService} from "../movie.service";
import {IMovie} from "../../interfaces";

@Injectable({
  providedIn: 'root'
})
export class MoviesResolver implements Resolve<IMovie[]> {

  constructor(private movieService: MovieService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IMovie[]> | Promise<IMovie[]> | IMovie[] {
    const {page} = route.queryParams;
    return this.movieService.getAll(page || 1);
  }

}
