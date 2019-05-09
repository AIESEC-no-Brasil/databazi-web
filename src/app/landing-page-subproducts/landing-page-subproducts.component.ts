import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page-subproducts',
  templateUrl: './landing-page-subproducts.component.html',
  styleUrls: ['./landing-page-subproducts.component.scss']
})
export class LandingPageSubproductsComponent implements OnInit {

  @Input() subproducts:any;
  actualPage : string;
  constructor(
    public router: Router
  ) { }

  ngOnInit() {
    this.checkUrl();
  }

  checkUrl(){
    this.actualPage = this.router.url.replace('/', '');
  }

}
