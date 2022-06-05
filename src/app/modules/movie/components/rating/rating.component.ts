import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IMovie} from "../../interfaces";

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  movies: IMovie[];
  currentRate: number;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({data: {results}}) => {
      this.movies = results;
      this.movies.map(movie => {
          this.currentRate = movie.popularity * 0.001;
        }
      )

    })
  }

}
