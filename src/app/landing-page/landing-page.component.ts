import { Component, OnInit, ViewChild } from '@angular/core';
import {DragScrollComponent } from 'ngx-drag-scroll';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import 'hammerjs';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

	@ViewChild('nav', { read: DragScrollComponent }) ds: DragScrollComponent;
  sliderPosition: number = 0;
  seeMoreGv:boolean = false;
  seeMoreGe:boolean = false;
  seeMoreGt:boolean = false;
  timer : any;
  swipe_action = {
    left: 'swipleft', 
    right: 'swiperight'
  }

  constructor(
    public router: Router
  ) { }

  swipeRight(action = this.swipe_action.right){
    this.stopAnimation
    this.moveLeft();
  }
  swipeLeft(action = this.swipe_action.left){
    this.moveRight();
  }

	moveLeft() {
    if ((this.sliderPosition - 100) < 0){
      this.sliderPosition = 200;
    }
    else {
      this.sliderPosition -= 100;
    }
    $('.carousel-wrapper').animate({left: '-' + this.sliderPosition + '%'});
  }

  moveRight() {
    if ((this.sliderPosition + 100) > 200){
      this.sliderPosition = 0;
    } 
    else {
      this.sliderPosition += 100
    }
    $('.carousel-wrapper').animate({left: '-' + this.sliderPosition + '%'});
  }

  ngOnInit() {
    this.sliderAnimation();
    window.scrollTo(0,0)
  }

  sliderAnimation(){
    this.timer = setInterval(() => {
      this.moveRight()
    }, 10000);
  }

  stopAnimation(){
    clearInterval(this.timer);
  }

  scrollToGlobal(){
    var element = document.getElementById('global');
    element.scrollIntoView({
      block: 'start',
      behavior: 'smooth'
    });
  }
  toggleGv(){
    this.seeMoreGv ? this.seeMoreGv = false : this.seeMoreGv = true;
  }

  toggleGe(){
    this.seeMoreGe ? this.seeMoreGe = false : this.seeMoreGe = true;
  }

  toggleGt(){
    this.seeMoreGt ? this.seeMoreGt = false : this.seeMoreGt = true;
  }

  goToGv(){
    this.router.navigate(['/voluntario-global']);
  }

  goToGe(){
    this.router.navigate(['/empreendedor-global']);
  }

  goToGt(){
    this.router.navigate(['/talento-global']);
  }


}
