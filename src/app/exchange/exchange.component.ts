import { Component, OnInit } from '@angular/core';

import { environment } from 'environments/environment';

import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit {

  private host;
  private data;

  constructor(private httpService: HttpService) {
    this.host = environment.exchangeHost;
  }

  // toString(data) {
  //   return `${data.base_ccy}`
  // }

  ngOnInit() {
    this.httpService.getService(this.host).subscribe(
      data => {
        return this.data = data,
        console.log(this.data);
      }
    );
  }

}
