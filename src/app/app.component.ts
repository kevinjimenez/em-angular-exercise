import {
  Component,
  ChangeDetectionStrategy,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { SplashScreenService } from './_metronic/partials/layout/splash-screen/splash-screen.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'body[root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy {
  private unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/

  constructor(
    private splashScreenService: SplashScreenService,
    private router: Router,
  ) {
    
  }

  ngOnInit() {
    const routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // clear filtration paginations and others
      
        // hide splash screen
        this.splashScreenService.hide();

        // scroll to top on every route change
        window.scrollTo(0, 0);

        // to display back the body content
        setTimeout(() => {
          document.body.classList.add('page-loaded');
        }, 500);
      }
    });
    this.unsubscribe.push(routerSubscription);
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}


// {
//   "total": 3,
//   "result": [
//       {
//           "_id": "61227d5453e7b5000940263e",
//           "countryCode": "US",
//           "languageIsoCode": "es",
//           "currencyCode": "MXN",
//           "format": {
//               "useCode": true,
//               "cents": 2,
//               "currencyPosition": "BEFORE",
//               "thousandIdentifier": ",",
//               "decimalSeparator": "."
//           },
//           "createdAt": "2021-10-28T09:19:36.371Z"
//       },
//       {
//           "_id": "623b636f174a6b0009915df4",
//           "countryCode": "AG",
//           "languageIsoCode": "AG",
//           "currencyCode": "AED",
//           "format": {
//               "useCode": true,
//               "cents": 2,
//               "currencyPosition": "AFTER",
//               "thousandIdentifier": ",",
//               "decimalSeparator": ","
//           },
//           "createdAt": "2022-03-23T18:14:07.814Z"
//       },
//       {
//           "_id": "623b843a7c4e6b0008b06de7",
//           "format": {
//               "useCode": false,
//               "cents": 0,
//               "currencyPosition": "AFTER",
//               "thousandIdentifier": ".",
//               "decimalSeparator": ","
//           },
//           "countryCode": "AD",
//           "currencyCode": "EUR",
//           "languageIsoCode": "es",
//           "createdAt": "2022-03-23T20:34:02.429Z"
//       }
//   ]
// }