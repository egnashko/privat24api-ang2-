import { Component, OnInit } from '@angular/core';

import { GeolocationService } from '../services/location.service';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-atm-search',
  templateUrl: './atm-search.component.html',
  styleUrls: ['./atm-search.component.css']
})
export class AtmSearchComponent implements OnInit {

  lat: number = 50.4546600;
  lng: number = 30.5238000;
  zoom: number = 15;



  constructor(public geolocationService: GeolocationService,
              public httpService: HttpService) { }

  ngOnInit() {
    this.geolocationService.getLocation();
    this.httpService.httpPost().subscribe(
      data => console.log(data)
    );
  }

}
