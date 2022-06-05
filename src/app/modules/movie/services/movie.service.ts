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

  getAll(page: number = 1): Observable<IMovie[]> {
    return this.httpClient.get<IMovie[]>(urls.movies, {params: {page}})
  }

  getById(id: string): Observable<IMovie> {
    return this.httpClient.get<IMovie>(`${urls.movies}/${id}`);
  }
}
