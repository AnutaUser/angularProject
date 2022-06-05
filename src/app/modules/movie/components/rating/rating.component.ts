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
    this.activatedRoute.data.subscribe(({data}) => {
      const {results} = data;
      this.movies = results;
      this.movies.map(movie => {
        const popularity = movie.popularity * 0.001;
        // console.log(movie.popularity)
        const id = movie.id;
        if (popularity) {

          this.currentRate = popularity;
        }
      })

    })
  }

}
