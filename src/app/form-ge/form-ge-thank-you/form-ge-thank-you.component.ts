import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-ge-thank-you',
  templateUrl: './form-ge-thank-you.component.html',
  styleUrls: ['./form-ge-thank-you.component.scss']
})
export class FormGeThankYouComponent implements OnInit {
  window: any = window;
  constructor(
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
  }

  goToAiesec() {
    window.open("https://aiesec.org/", "_blank");
  }

  goToBlog() {
    window.open("https://blog.aiesec.org.br/", "_blank");
  }

}
