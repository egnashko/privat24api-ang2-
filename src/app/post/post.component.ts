import { Component, OnInit } from '@angular/core';

import { environment } from 'environments/environment';

import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  private host;
  private data;

  constructor(private httpService: HttpService) {
    this.host = environment.postOfficeHost;
  }

  ngOnInit() {
    this.httpService.httpGet(this.host).subscribe(data => this.data = data.services);
  }

}
