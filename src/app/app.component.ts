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
  cookies_policy : boolean = false;

  constructor(
    public activate: ActivatedRoute
  ){

  }

  hideSnackBar() {
    localStorage.setItem('cookies_policy', 'true');
    this.cookies_policy = false;
  };

  ngOnInit() {
    if(!localStorage.getItem('cookies_policy')){
      this.cookies_policy = true;
    }
  };

  changeOfRoutes(){
    this.activate.queryParams.subscribe((param: any) => {
      if (!param['embedded']){
        this.window.fbq('init', '786594798205999');
        this.window.fbq('track', 'PageView');
      }
    });
  }
}
