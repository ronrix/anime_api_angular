import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { ListOfMoviesComponent } from './list-of-movies/list-of-movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { HeaderComponent } from './header/header.component';

import { SafePipe } from './safe.pipe';
import { AnimesService } from './animes.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListOfMoviesComponent,
    MovieDetailsComponent,
    SafePipe,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule],
  providers: [AnimesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
