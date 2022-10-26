import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

// sample data
import {data} from '../assets/config/data.config';

@Injectable({
  providedIn: 'root',
})
export class AnimesService {

  constructor(private http: HttpClient) { }

  private url = "https://api.jikan.moe/v4/anime";
  private data = new Subject<any>();

  getAnimes(): Observable<any> {
    this.http.get(this.url).subscribe((res: any) => {
      this.data.next(res);
    });

    return this.data;
  }

  searchAnime(query: string) {
    this.http.get(this.url + '?q=' + query).subscribe((res: any) => {
      this.data.next(res);
    });
  }

}
