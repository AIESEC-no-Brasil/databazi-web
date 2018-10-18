import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-ge-thank-you',
  templateUrl: './form-ge-thank-you.component.html',
  styleUrls: ['./form-ge-thank-you.component.scss']
})
export class FormGeThankYouComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  accessAiesec() {
    window.open("https://aiesec.org/", "_blank");
  }

}
