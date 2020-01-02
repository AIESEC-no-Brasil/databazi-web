import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import 'hammerjs';
import { AmplitudeService } from '../amplitude.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-slider-membership-host',
  templateUrl: './slider-membership-host.component.html',
  styleUrls: ['./slider-membership-host.component.scss']
})
export class SliderMembershipHostComponent implements OnInit {

  slider: boolean = true;
  actualPage: string = '';

  constructor(
    public router: Router,
    public amplitude: AmplitudeService
  ) { }

  ngOnInit() {
    this.checkUrl();
    if (this.actualPage != 'membresia') {
      this.timerSlider();
    }
  }


  timerSlider() {
    setInterval(() => {
      this.slider ? this.slider = false : this.slider = true;
    }, 3000)
  }
  goToHost() {
    this.router.navigate(['/lar-global']);
    this.amplitude.trackingClickHosp();
  }

  goToMembership() {
    this.router.navigate(['/membresia']);
    this.amplitude.trackingClickGoToMember();
  }

  goToMembershipForm() {
    var element = $('#header-talentos-globais').offset().top-80;
    $('html, body').animate({
      scrollTop: element
    }, 700);
  }

  checkUrl() {
    this.actualPage = this.router.url.replace('/', '');
  };

}
