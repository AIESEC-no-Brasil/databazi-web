import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  actual: number = 1;
  seeMoreGv:boolean = false;
  seeMoreGe:boolean = false;
  seeMoreGt:boolean = false;

	moveLeft() {
    this.actual -= 1;
    if (this.actual < 1){
      this.actual = 3;
    }
  }

  moveRight() {
    this.actual += 1;
    if (this.actual > 3){
      this.actual = 1;
    }
  }

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
    this.sliderAnimation()
  }

  sliderAnimation(){
    setInterval(() => {
      this.moveRight()
    }, 10000);
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
    this.router.navigate(['/landing-page-gv']);
  }

  goToGe(){
    this.router.navigate(['/landing-page-ge']);
  }

  goToGt(){
    this.router.navigate(['/landing-page-gt']);
  }


}
