import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AmplitudeService } from 'src/app/amplitude.service';

@Component({
  selector: 'app-form-gt-thank-you',
  templateUrl: './form-gt-thank-you.component.html',
  styleUrls: ['./form-gt-thank-you.component.scss']
})
export class FormGtThankYouComponent implements OnInit {
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
    this.amplitude.trackingSignupThankYouHomeGt()
  }

  goToAiesec() {
    window.open("https://aiesec.org/", "_blank");
    this.amplitude.trackingSignupThankYouAiesecGt()
  }

  goToBlog() {
    window.open("https://blog.aiesec.org.br/", "_blank");
    this.amplitude.trackingSignupThankYouBlogGt()
  }

}
