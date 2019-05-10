import { Component } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import * as Sentry from '@sentry/browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  window:any = window;
  router: Router;
  cookies_policy : boolean = false;

  constructor(
    public activate: ActivatedRoute
  ){
    Sentry.init({ dsn: 'https://4478f31a94964381b765142fea1afd5a@sentry.io/1411311' });
  }

  hideSnackBar() {
    localStorage.setItem('cookies_policy', 'true');
    this.cookies_policy = false;
  };

  ngOnInit() {
    if(!localStorage.getItem('cookies_policy')){
      this.cookies_policy = true;
    }
  }

  changeOfRoutes(){
    this.activate.queryParams.subscribe((param: any) => {
      if (!param['embedded']){
        this.window.fbq('init', '531154527045235');
        this.window.fbq('init', '2083757008560964');
        this.window.fbq('track', 'PageView');
      }
    });
  }
}
