import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AmplitudeService } from 'src/app/amplitude.service';

@Component({
  selector: 'app-form-ge-thank-you',
  templateUrl: './form-ge-thank-you.component.html',
  styleUrls: ['./form-ge-thank-you.component.scss']
})
export class FormGeThankYouComponent implements OnInit {
  window: any = window;
  constructor(
    public amplitude: AmplitudeService,
    public router: Router
  ) {
    this.window.fbq('track', 'Lead');
  }

  ngOnInit() {
    this.window.ga('set', 'page', '/empreendedor-global/obrigado');
    this.window.ga('send', 'pageview');
  }

  goToHome() {
    this.router.navigate(['/']);
    this.amplitude.trackingSignupThankYouHomeGe()
  }

  goToAiesec() {
    window.open("https://aiesec.org/", "_blank");
    this.amplitude.trackingSignupThankYouAiesecGe()
  }

  goToBlog() {
    window.open("https://blog.aiesec.org.br/", "_blank");
    this.amplitude.trackingSignupThankYouBlogGe()
  }

}
