import { Component, OnInit } from '@angular/core';
import { AnimesService } from '../animes.service';

@Component({
  selector: 'app-list-of-movies',
  templateUrl: './list-of-movies.component.html',
  styleUrls: ['./list-of-movies.component.less'],
})
export class ListOfMoviesComponent implements OnInit {

  constructor(private animeService: AnimesService) {
    this.animeService.getAnimes().subscribe((res: any) => {
      this.animes = res;
      this.anime = res.data[0];
    });
 }

  animes: any = {}; // lists of animes
  anime: any = {}; // anime details
  loading: boolean = true;

  active_idx: number = 0;

  ngOnInit(): void {
    setTimeout(() => {
      this.animeService.getAnimes().subscribe((res: any) => {
        this.animes = res;
        this.anime = res.data[0];
      });
      this.loading = false;
      this.active_idx = this.anime.mal_id;
    }, 2000);
  }

  setAnimeDetails(id: number) {
    this.loading = true;
    this.active_idx = id;

    setTimeout(() => {
      this.anime = this.animes.data.find((el: any) => el.mal_id === id);
      this.loading = false;
    }, 1000);
  }

}
