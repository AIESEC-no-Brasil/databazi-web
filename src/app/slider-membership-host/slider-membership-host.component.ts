import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import 'hammerjs';
import { AmplitudeService } from '../amplitude.service';


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
    this.amplitude.trackingClickHosp()
  }

  goToMembership() {
    window.open('http://promo.aiesec.org.br/sejamembro/')
    this.amplitude.trackingClickGoToMember()
  }

  checkUrl() {
    this.actualPage = this.router.url.replace('/', '');
  };

}
