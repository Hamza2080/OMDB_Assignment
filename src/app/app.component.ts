import { Component, OnInit } from '@angular/core';
import { MoviesService } from './services/movies/movies.service';
import { Movie } from './types';
import { OmdbResponse } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-test';
  movies: Movie[] = [] as Movie[];
  error: string | null = null;

  constructor(
    private movieService: MoviesService
  ) { }

  ngOnInit(): void {
    this.getDefaultMovie();
  }

  getDefaultMovie() {
    this.error = null;
    this.movieService.getDefaultMovie()
      .subscribe(
        (response) => this.extractMovies(response as OmdbResponse),
        (error) => {
          console.log(error);
          this.error = error.message || 'Unable to get movie ATM'
        }
      )
  }


  searchMovie(movieName: string) {
    this.error = null;

    if (movieName == '') {
      this.getDefaultMovie();
    }

    this.movieService.getMovie(movieName)
      .subscribe(
        (response) => this.extractMovies(response as OmdbResponse),
        (error) => {
          console.log(error);
          this.error = error.message || 'Unable to get movie ATM'
        }
      )
  }

  extractMovies(response: OmdbResponse) {
    let data: OmdbResponse = response as OmdbResponse;
    if (Number(data.totalResults) > 0) {
      this.movies = data.Search?.filter((item, index) => index < 3)!;
    }
  }
}
