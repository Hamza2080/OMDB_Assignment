import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { MoviesService } from './services/movies/movies.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { movieInterceptor } from './interceptors/movieInterceptor.interceptor';
import { ShowMovieComponent } from './components/show-movie/show-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ShowMovieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    MoviesService,
    { provide: HTTP_INTERCEPTORS, useClass: movieInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
