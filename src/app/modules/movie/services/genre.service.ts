import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IGenre} from "../interfaces";
import {urls} from "../../../constants";

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<{ genres: IGenre[] }> {
    return this.httpClient.get<{ genres: IGenre[] }>(urls.genres);
  }
}
