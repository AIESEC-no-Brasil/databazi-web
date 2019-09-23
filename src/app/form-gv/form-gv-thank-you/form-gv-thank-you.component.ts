import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AmplitudeService } from 'src/app/amplitude.service';

@Component({
  selector: 'app-form-gv-thank-you',
  templateUrl: './form-gv-thank-you.component.html',
  styleUrls: ['./form-gv-thank-you.component.scss']
})
export class FormGvThankYouComponent implements OnInit {
  window: any = window;
  constructor(
    public amplitude: AmplitudeService,
    public router: Router
  ) {
    this.window.fbq('track', 'Lead');
  }

  ngOnInit() {
    this.window.ga('set', 'page', '/voluntario-global/obrigado');
    this.window.ga('send', 'pageview');
  }

  goToHome() {
    this.router.navigate(['/']);
    this.amplitude.trackingSignupThankYouHomeGv()
  }

  goToAiesec() {
    window.open("https://aiesec.org/", "_blank");
    this.amplitude.trackingSignupThankYouAiesecGv()
  }

  goToBlog() {
    window.open("https://blog.aiesec.org.br/", "_blank");
    this.amplitude.trackingSignupThankYouBlogGv()
  }
}
