import { Component, OnInit, ViewChild } from '@angular/core';
import {DragScrollComponent } from 'ngx-drag-scroll';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

	@ViewChild('nav', { read: DragScrollComponent }) ds: DragScrollComponent;

	moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }

  constructor() { }

  ngOnInit() {
  }

}
