import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AmplitudeService } from 'src/app/amplitude.service';

@Component({
  selector: 'app-form-host-thank-you',
  templateUrl: './form-host-thank-you.component.html',
  styleUrls: ['./form-host-thank-you.component.scss']
})
export class FormHostThankYouComponent implements OnInit {
  window: any = window;

  constructor(
    public amplitude: AmplitudeService,
    private router: Router
  ) {
    this.window.fbq('track', 'Lead');
  }

  ngOnInit() {
  }

  redirectToHome() {
    this.router.navigate(['/']);
    this.amplitude.trackingSignupThankYouHomeHost()
  }
}