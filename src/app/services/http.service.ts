import { Injectable } from '@angular/core';
import { Http, Jsonp, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpService {

  constructor(private http: Http,
              private jsonp: Jsonp) {  }

  httpGet(host): Observable<any> {
    return this.http
      .get(host)
      .map(res => res.json())
      .catch(this.handleError);
  }

// Was some problem with post offices requets but jsonP didn't help with it because
// privat server can't give jsonP callback so deside to write little nose server "serve.js"

  // jsonpGet(host): Observable<any> {
  //   let params = new URLSearchParams();
  //   params.set('callback', 'JSONP_CALLBACK');
  //   return this.jsonp
  //     .get(host + params)
  //     .map(res => res.json())
  //     .catch(this.handleError);
  // }

  private handleError(error:any) {
    console.error('Error', error);
    return Promise.reject(error.message || error);
  }
}
