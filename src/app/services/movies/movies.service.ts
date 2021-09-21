import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getDefaultMovie() {
    return this.http.get('?s=hit');
  }

  getMovie(movieName: string) {
    return this.http.get(`?s=${movieName}`);
  }
}
