import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-gv-thank-you',
  templateUrl: './form-gv-thank-you.component.html',
  styleUrls: ['./form-gv-thank-you.component.scss']
})
export class FormGvThankYouComponent implements OnInit {

  constructor(
    public router: Router
  ) {
    fbq('track', 'Lead');
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
