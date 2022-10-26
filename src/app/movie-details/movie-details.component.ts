import { Component, OnInit, Input } from '@angular/core';
import { AnimesService } from '../animes.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.less'],
})
export class MovieDetailsComponent implements OnInit {

  constructor(private animeService: AnimesService) { }

  anime: any = {};
  loading: boolean = true;
  id: any = 0;

  ngOnInit(): void {
    this.animeService.getAnimeDetails().subscribe((res: any) => {
      this.anime = res;
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
      }, 1000);

    });
  }

}
