import { Component, OnInit, ViewChild } from '@angular/core';
import {DragScrollComponent } from 'ngx-drag-scroll';

@Component({
  selector: 'app-landing-footer',
  templateUrl: './landing-footer.component.html',
  styleUrls: ['./landing-footer.component.scss']
})
export class LandingFooterComponent implements OnInit {

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
