import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IMovie} from "../interfaces";
import {urls} from "../../../constants";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(page: number = 1): Observable<{ page: number; results: IMovie[] }> {
    return this.httpClient.get<{ page: number; results: IMovie[] }>(urls.movies, {params: {page}})
  }

  getById(id: string): Observable<IMovie> {
    return this.httpClient.get<IMovie>(`${urls.movies}/${id}`);
  }

  getByGenre(genreId: number): Observable<{ page: number; results: IMovie[] }> {
    return this.httpClient.get<{ page: number; results: IMovie[] }>(urls.genres + `${genreId}` + `/movies`)
  }

}
