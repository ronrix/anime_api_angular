import { Component, OnInit } from '@angular/core';
import { AnimesService } from '../animes.service';

@Component({
  selector: 'app-list-of-movies',
  templateUrl: './list-of-movies.component.html',
  styleUrls: ['./list-of-movies.component.less'],
})
export class ListOfMoviesComponent implements OnInit {

  constructor(private animeService: AnimesService) { }

  animes: any = {}; // lists of animes
  active_idx: number = 0;

  ngOnInit(): void {
    this.animeService.getAnimes().subscribe((res: any) => {
      this.animes = res;
      this.active_idx = this.animes.data[0].mal_id;
    });
  }

  setAnimeDetails(id: number) {
    this.animeService.setAnimeDetails(id);
    this.active_idx = id;
  }

}
