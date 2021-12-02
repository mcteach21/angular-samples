import { Injectable } from '@angular/core';

/**
 * Rx Library
 */
 import { Observable, interval, Subscription, from } from 'rxjs';
 import { map } from 'rxjs/operators'

/**
 * httpclient
 */
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Rate } from '../modele/rate';
import { Exchange } from '../modele/exchange';

@Injectable({
  providedIn: 'root' //Injection Dependance => Tous les composants (root)
})
export class ApiService {

  apiForexUrl : string = 'http://api.exchangeratesapi.io/v1/latest?access_key=3942fdcf1e4e98add7605f388356e263';

  // observable : Observable
  constructor(private httpClient : HttpClient) {
      // this.observable 
  }

  getAll() : Observable<string> {
     // return from([1, 2, 3, 4]).pipe(map(n=>'value '+n));
     return interval(1500).pipe(map(n=>'value '+n));
  }

  forex() : Observable<Rate> {
     return this.httpClient.get<Rate>(this.apiForexUrl);
  }
}
