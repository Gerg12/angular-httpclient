import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-httpclient';

  game: any = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.getGames();
  }

  getGames() {
    this.api.getGame()
    .subscribe(data => {
      for (const d of (data as any)) {
        this.game.push({
          name: d.name,
          born: d.born
        });
      }
      console.log(this.game);
    });
  }
}
