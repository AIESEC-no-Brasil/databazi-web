import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-gt-thank-you',
  templateUrl: './form-gt-thank-you.component.html',
  styleUrls: ['./form-gt-thank-you.component.scss']
})
export class FormGtThankYouComponent implements OnInit {
  window: any = window;
  constructor(
    public router: Router
  ) {
    this.window.fbq('track', 'Lead');
  }

  ngOnInit() {
  }

  goToHome() {
    this.router.navigate(['/']);
  }

  goToAiesec() {
    window.open("https://aiesec.org/", "_blank");
  }

  goToBlog() {
    window.open("http://aiesec.blog.br/", "_blank");
  }

}
