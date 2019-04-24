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

  constructor(
    public router: Router
  ) { }

  swipe(side:string){
    this.stopAnimation();
    side == 'left' ? this.moveRight() : this.moveLeft();
  }

  redirectTo(){
    switch (this.sliderPosition){
      case 0:
        this.goToGv();
        break;
      case 100:
        this.goToGe();
        break;
      case 200:
        this.goToGt();
        break;
    }
  }

  showSnackBar() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    //setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  };

  hideSnackBar() {
    var x = document.getElementById("snackbar");
    x.className = "";
  };
  
	moveLeft() {
    if ((this.sliderPosition - 100) < 0){
      this.sliderPosition = 200;
    }
    else {
      this.sliderPosition -= 100;
    }
    $('.carousel-wrapper').animate({left: '-' + this.sliderPosition + '%'});
    this.sliderAnimation();
  }

  moveRight() {
    if ((this.sliderPosition + 100) > 200){
      this.sliderPosition = 0;
    } 
    else {
      this.sliderPosition += 100
    }
    $('.carousel-wrapper').animate({left: '-' + this.sliderPosition + '%'});
    this.sliderAnimation();
  }

  ngOnInit() {
    this.sliderAnimation();
    window.scrollTo(0,0);
    this.showSnackBar();
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

  scrollToGlobal(){
    var element = $('#global').offset().top;
    if (window.innerWidth >= 1024){
      element -= 100;
    }
    $('html, body').animate({
      scrollTop: element
    }, 700)
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

  goToAiesec(){
    window.open("https://aiesec.org/search");
  }


}
