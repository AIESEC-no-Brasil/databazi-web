import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-gt-thank-you',
  templateUrl: './form-gt-thank-you.component.html',
  styleUrls: ['./form-gt-thank-you.component.scss']
})
export class FormGtThankYouComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  accessAiesec() {
    window.open("https://aiesec.org/", "_blank");
  }

}
