import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.less'],
})
export class MovieDetailsComponent implements OnInit {

  constructor() { }

  @Input() anime: any = {};
  @Input() loading: boolean = true;

  ngOnInit(): void { }

}
