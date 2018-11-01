import { Component } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  window:any = window;
  router: Router;

  constructor(
    public activate: ActivatedRoute
  ){

  }
  changeOfRoutes(){
    this.activate.queryParams.subscribe((param: any) => {
      if (!param['embedded']){
        this.window.fbq('track', 'PageView');
        this.window.fbq('init', '531154527045235');
        this.window.fbq('init', '2083757008560964');
      }
    });
  }
}
