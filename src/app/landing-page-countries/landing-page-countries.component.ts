import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-landing-page-countries',
  templateUrl: './landing-page-countries.component.html',
  styleUrls: ['./landing-page-countries.component.scss']
})
export class LandingPageCountriesComponent implements OnInit {

  @Input() countries: any;
  country: any;
  actualPage: any;
  constructor(
    public router: Router
  ) { }

  ngOnInit() {
    this.checkUrl();
    this.country = _.find(this.countries, (country) => { return country.active })
  }

  checkUrl() {
    this.actualPage = this.router.url.replace('/', '');
  }

  selectCountry(country) {
    _.forEach(this.countries, (element) => { element.active = false });
    country.active = true;
    this.country = country;
    setTimeout(() => {
      $('html, body').animate({
        scrollTop: $('#countries li.active').offset().top
      }, 700)
    }, 200);
  }
}
