import { Component, OnInit, ViewChild } from "@angular/core";
import { DragScrollComponent } from "ngx-drag-scroll";
import { Router } from "@angular/router";
import * as $ from "jquery";
import "hammerjs";
import { AmplitudeService } from "../amplitude.service";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.scss"],
})
export class LandingPageComponent implements OnInit {
  window: any = window;

  @ViewChild("nav", { read: DragScrollComponent }) ds: DragScrollComponent;
  sliderPosition: number = 0;
  seeMoreGv: boolean = false;
  seeMoreGe: boolean = false;
  seeMoreGt: boolean = false;
  timer: any;

  constructor(public router: Router, public amplitude: AmplitudeService) {}

  swipe(side: string) {
    this.stopAnimation();
    side == "left" ? this.moveRight() : this.moveLeft();
  }

  redirectTo() {
    switch (this.sliderPosition) {
      case 0:
        this.goToGv();
        this.amplitude.trackingClickHistGV();
        break;
      case 100:
        this.goToGe();
        this.amplitude.trackingClickHistGE();
        break;
      case 200:
        this.goToGt();
        this.amplitude.trackingClickHistGT();
        break;
    }
  }

  moveLeft() {
    if (this.sliderPosition - 100 < 0) {
      this.sliderPosition = 200;
    } else {
      this.sliderPosition -= 100;
    }
    $("#our-stories .carousel-wrapper").animate({
      left: "-" + this.sliderPosition + "%",
    });
    this.sliderAnimation();
  }

  moveRight() {
    if (this.sliderPosition + 100 > 200) {
      this.sliderPosition = 0;
    } else {
      this.sliderPosition += 100;
    }
    $("#our-stories .carousel-wrapper").animate({
      left: "-" + this.sliderPosition + "%",
    });
    this.sliderAnimation();
  }

  ngOnInit() {
    this.sliderAnimation();
    window.scrollTo(0, 0);
    this.window.ga("set", "page", "/");
    this.window.ga("send", "pageview");
  }

  sliderAnimation() {
    this.stopAnimation();
    this.timer = setInterval(() => {
      this.moveRight();
    }, 10000);
  }

  stopAnimation() {
    clearInterval(this.timer);
  }

  scrollToGlobal() {
    var element = $("#header-product").offset().top;
    $("html, body").animate(
      {
        scrollTop: element,
      },
      700
    );
    this.amplitude.trackingVisualPrograms();
  }
  toggleGv() {
    this.seeMoreGv ? (this.seeMoreGv = false) : (this.seeMoreGv = true);
  }

  toggleGe() {
    this.seeMoreGe ? (this.seeMoreGe = false) : (this.seeMoreGe = true);
  }

  toggleGt() {
    this.seeMoreGt ? (this.seeMoreGt = false) : (this.seeMoreGt = true);
  }

  goToGv() {
    this.router.navigate(["/voluntario-global"]);
    this.amplitude.trackingSaibaMaisGV();
  }

  goToGe() {
    this.router.navigate(["/talento-global"]);
    this.amplitude.trackingSaibaMaisGE();
  }

  goToGt() {
    this.router.navigate(["/professor-global"]);
    this.amplitude.trackingSaibaMaisGT();
  }

  goToHost() {
    this.router.navigate(["/lar-global"]);
  }

  goToAiesec() {
    window.open("https://aiesec.org/search");
  }
}
