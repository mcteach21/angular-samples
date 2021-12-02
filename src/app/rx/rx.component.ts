import { Component, OnInit, OnDestroy } from '@angular/core';

/**
 * Rx Library
 */
 import { Observable, interval, Subscription, from } from 'rxjs';

/**
 * Service API
*/
import { ApiService } from '../service/api.service';

import { Rate } from '../modele/rate';
import { Exchange } from '../modele/exchange';

@Component({
  selector: 'app-rx',
  templateUrl: './rx.component.html',
  styleUrls: ['./rx.component.css']
})
export class RxComponent implements OnInit, OnDestroy {

  private subscription : Subscription
  // private observable : Observable<any>

  data : Array<string> = []
  started : boolean = false

  base : string
  rates : Array<Exchange> = []

  constructor(private apiService : ApiService) {
      // this.observable = interval(1000);

      // console.log('Subscribe to begin listening for async result..');
      // this.api_observable.subscribe({
      //   next(response) { 
      //     console.log(response['status']); 
      //   },
      //   // error(err) { console.error('Error: ' + err); },
      //   // complete() { console.log('Completed'); }
      // });
  }

  ngOnInit(): void {
    // this.data.push('process init..'+this.apiService.hello());

  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
      console.log('subscription..unsubscribe!');
  }

  onStart(): void {
      console.log('subscription subscribe..');
      
      this.data = []
      this.subscription = this.apiService.getAll().subscribe(s=>{
          this.data.push(s);
      });
      this.started = true
  }
  onStop(): void {
      if(!this.started)
        return;

      this.subscription.unsubscribe();
      console.log('subscription..unsubscribe!');
      this.started = false
  }

  onApiRequest() : void {
      // Create an Observable out of a promise
      // var api_observable = from(fetch('http://api.exchangeratesapi.io/v1/latest?access_key=3942fdcf1e4e98add7605f388356e263'));
      // api_observable.subscribe({
      //       next(response) { 
      //         console.log(response['status']); 
      //       },
      //       error(err) { console.error('Error: ' + err); },
      //       complete() { console.log('Completed'); }
      //     });

      this.subscription = this.apiService.forex().subscribe(rate=>{
          console.log(rate['rates']);

          this.base = rate['base'];
          this.rates = rate['rates'];
      });
  }

}
