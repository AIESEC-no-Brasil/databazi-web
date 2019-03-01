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
        this.window.fbq('init', '786594798205999');
        this.window.fbq('track', 'PageView');
      }
    });
  }
}
