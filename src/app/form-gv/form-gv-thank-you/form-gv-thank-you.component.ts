import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-gv-thank-you',
  templateUrl: './form-gv-thank-you.component.html',
  styleUrls: ['./form-gv-thank-you.component.scss']
})
export class FormGvThankYouComponent implements OnInit {
  window: any = window;
  whatsappLink: string;
  constructor(
    public router: Router,
    public route: ActivatedRoute
  ) {
    this.window.fbq('track', 'Lead');
  }

  ngOnInit() {
    this.whatsappLink = this.route.snapshot.paramMap.get('whatsappLink');
  }

  whatsappContact() {
    window.open(this.whatsappLink, "_blank");
  }

  goToHome() {
    this.router.navigate(['/']);
  }

  goToAiesec() {
    window.open("https://aiesecargentina.org/", "_blank");
  }

  goToBlog() {
    window.open("https://aiesecargentina.org/blog/", "_blank");
  }
}
