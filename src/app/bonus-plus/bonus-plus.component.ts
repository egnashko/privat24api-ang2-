import { Component, OnInit } from '@angular/core';

import { environment } from 'environments/environment';

import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-bonus-plus',
  templateUrl: './bonus-plus.component.html',
  styleUrls: ['./bonus-plus.component.css']
})
export class BonusPlusComponent implements OnInit {

  private host;
  private data;

  constructor(private httpService: HttpService) {
    this.host = 'environment.bonusPlusHost';
  }

  ngOnInit() {
    this.httpService.httpGet(this.host).subscribe(
      data => {
        return this.data = data.services,
        console.log(this.data);
      }
    );
  }

}
