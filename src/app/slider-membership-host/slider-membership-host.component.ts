import { Component, OnInit, ViewChild } from '@angular/core';
import {DragScrollComponent } from 'ngx-drag-scroll';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import 'hammerjs';

@Component({
  selector: 'app-slider-membership-host',
  templateUrl: './slider-membership-host.component.html',
  styleUrls: ['./slider-membership-host.component.scss']
})
export class SliderMembershipHostComponent implements OnInit {

  @ViewChild('nav', { read: DragScrollComponent }) ds: DragScrollComponent;
  sliderPosition: number = 0;
  timer : any;
  
  constructor(
    public router: Router
  ) { }

  ngOnInit() {
    this.sliderAnimation();
    window.scrollTo(0,0);
  }

  swipe(side:string){
    this.stopAnimation();
    side == 'left' ? this.moveRight() : this.moveLeft();
  }

  moveLeft() {
    if ((this.sliderPosition - 100) < 0){
      this.sliderPosition = 100;
    }
    else {
      this.sliderPosition -= 100;
    }
    $('.slider-membrasia-host .carousel-wrapper').animate({left: '-' + this.sliderPosition + '%'});
    this.sliderAnimation();
  }

  moveRight() {
    if ((this.sliderPosition + 100) > 100){
      this.sliderPosition = 0;
    } 
    else {
      this.sliderPosition += 100
    }
    $('.slider-membrasia-host .carousel-wrapper').animate({left: '-' + this.sliderPosition + '%'});
    this.sliderAnimation();
  }

  sliderAnimation(){
    this.stopAnimation();
    this.timer = setInterval(() => {
      this.moveRight()
    }, 10000);
  }

  stopAnimation(){
    clearInterval(this.timer);
  }

  goToHost(){
    this.router.navigate(['/hospede-um-intercambista']);
  }

  redirectTo(){
    switch (this.sliderPosition){
      case 0:
        window.open('http://promo.aiesec.org.br/sejamembro/')
        break;
      case 100:
        this.goToHost();
        break;
    }
  }

}
