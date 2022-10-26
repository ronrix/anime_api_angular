import { Component, OnInit } from '@angular/core';
import { AnimesService } from '../animes.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {

  constructor(private animeService: AnimesService) { }

  ngOnInit(): void {
  }

  query: string = "";

  search() {
    this.animeService.searchAnime(this.query);
  }

}
