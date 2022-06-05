import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IMovie} from "../../interfaces";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: IMovie[];
  currentPage: number;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {

    this.activatedRoute.data.subscribe(({data}) => {
      const {results} = data;
      this.movies = results;
    });

    this.activatedRoute.queryParamMap.subscribe(params => {
      let page = params.get('page') || 1;
      this.currentPage = +page;

    })
  }

  nextPage(num: number) {
    this.router.navigate(
      ['/movies'],
      {queryParams: {page: this.currentPage + 1}},
    );
    this.activatedRoute.data.subscribe(({data}) => {
      const {results, page} = data;

      console.log(data)
    })

  }

  prevPage() {
    this.router.navigate(
      ['/movies'],
      {queryParams: {page: this.currentPage - 1}}
    );
  }

}
