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
export class MoviesResolver implements Resolve<{ page: number, results: IMovie[] }> {

  constructor(private movieService: MovieService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<{ page: number; results: IMovie[] }> | Promise<{ page: number; results: IMovie[] }> | { page: number; results: IMovie[] } {
    const {page} = route.queryParams;
    return this.movieService.getAll(page || 1);
  }



}
