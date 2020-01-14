import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// const localUrl = 'https://sampleapis.com/switch/api/games';
const localUrl = 'assets/data/games.json';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  getGame() {
    return this.http.get(localUrl);
  }

  constructor(
    private http: HttpClient
  ) { }
}
