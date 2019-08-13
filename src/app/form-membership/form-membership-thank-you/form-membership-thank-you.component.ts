import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-membership-thank-you',
  templateUrl: './form-membership-thank-you.component.html',
  styleUrls: ['./form-membership-thank-you.component.scss']
})
export class FormMembershipThankYouComponent implements OnInit {
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
