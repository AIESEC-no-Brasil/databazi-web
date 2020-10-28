import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AmplitudeService } from 'src/app/amplitude.service';

@Component({
  selector: 'app-form-gp-thank-you',
  templateUrl: './form-gp-thank-you.component.html',
  styleUrls: ['./form-gp-thank-you.component.scss']
})
export class FormGpThankYouComponent implements OnInit {
  window: any = window;
  constructor(
    public amplitude: AmplitudeService,
    public router: Router
  ) {
    this.window.fbq('track', 'Lead');
  }

  ngOnInit() {
    this.window.ga('set', 'page', '/talento-global/obrigado');
    this.window.ga('send', 'pageview');
  }

  goToHome() {
    this.router.navigate(['/']);
    this.amplitude.trackingSignupThankYouHomeGp()
  }

  goToAiesec() {
    window.open("https://aiesec.org/", "_blank");
    this.amplitude.trackingSignupThankYouAiesecGp()
  }

  goToBlog() {
    window.open("https://blog.aiesec.org.br/", "_blank");
    this.amplitude.trackingSignupThankYouBlogGp()
  }

}
