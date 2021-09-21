import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/types';

@Component({
  selector: 'app-show-movie',
  templateUrl: './show-movie.component.html',
  styleUrls: ['./show-movie.component.css']
})
export class ShowMovieComponent implements OnInit {
  @Input() movies: Array<Movie> = [] as Array<Movie>;
  @Input() error: string | null = null;

  constructor() {}

  ngOnInit(): void {
  }

  getImageUrl(url: string) {
    return `url(${url})`;
  }

}
