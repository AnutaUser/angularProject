import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IMovie} from "../../interfaces";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movieDetails: IMovie;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({data}) => this.movieDetails = data);
  }

}
