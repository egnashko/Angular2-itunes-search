import { Component, OnInit } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';

import { environment } from 'environments/environment';

import { HttpService } from '../http-service/http.service';

import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  artistName;
  artistImg;
  artistId;
  artistGenre;
  artistUrl;
  previewUrl;
  getData;
  showModal;
  host = environment.host;

  constructor(private httpService: HttpService) {} 

  findMusic(name) {
    this.httpService.getMusic(name)
        .subscribe(data => {
          this.getData = data;
          this.artistName = data[0].artistName,
          this.artistImg = data[0].artworkUrl100.replace('100x100', '200x200'),
          this.artistId = data[0].artistId,
          this.artistGenre = data[0].primaryGenreName,
          this.artistUrl = data[0].artistViewUrl,
          this.previewUrl = data[0].previewUrl,
          console.log(data)
        })
  }

  ngOnInit() {

  }

}
