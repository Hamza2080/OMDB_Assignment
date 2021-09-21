import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() movieSearchEvent = new EventEmitter<string>();
  movieSearch: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  searchMovie() {
    this.movieSearchEvent.emit(this.movieSearch);
  }

}
