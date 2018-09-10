import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page-gt',
  templateUrl: './landing-page-gt.component.html',
  styleUrls: ['./landing-page-gt.component.scss']
})
export class LandingPageGtComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    window.scrollTo(0, 0);
  }

}
