import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

// sample data
import {data} from '../assets/config/data.config';

@Injectable({
  providedIn: 'root',
})
export class AnimesService {

  constructor(private http: HttpClient) { 
    this.defaultAnimes();
  }

  private url = "https://api.jikan.moe/v4/anime";
  private data = new Subject<any>();
  private animeDetails = new Subject<any>();
  /*
    DOCU: observable property "data" values are not accessible here when subscribing and getting the values
      so what i did is have another property that stores the data so i can access it easily
  */ 
  private raw_data: any = []; // this copies the data so i can use it and access the value in this service file

  /*
    DOCU: this defaultAnimes only run once when the page loads. 
          i request data to API for default values, so if i try to search 'this.data' won't change back to this.
          because if i put this request on getAnimes() and try to search it will just change back to default values
          so i isolated it from Observable function
  */ 
  defaultAnimes() {
    this.http.get(this.url).subscribe((res: any) => {
      this.data.next(res);
      this.animeDetails.next(res.data[0]);
      this.raw_data = res;
    });
  }

  getAnimes(): Observable<any> {
    return this.data;
  }

  searchAnime(query: string) {
    this.http.get(this.url + '?q=' + query).subscribe((res: any) => {
      this.data.next(res);
      this.animeDetails.next(res.data[0]);
      this.raw_data = res;
    });
  }

  getAnimeDetails(): Observable<any> {
    return this.animeDetails;
  }

  setAnimeDetails(id: number) {
    this.animeDetails.next(this.raw_data.data.find((anime: any) => anime.mal_id === id));
  }
}
