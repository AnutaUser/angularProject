import {Component, OnInit} from '@angular/core';

import {GenreService} from "../../services";
import {IGenre} from "../../interfaces";

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  genres: IGenre[];

  constructor(private genreService: GenreService) {
  }

  ngOnInit(): void {
    this.genreService.getAll().subscribe(({genres}) => {
      this.genres = genres;
    })
  }
}
