import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../../../node_modules/@ngx-translate/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { AmplitudeService } from '../amplitude.service'

@Component({
  selector: 'app-landing-page-menu',
  templateUrl: './landing-page-menu.component.html',
  styleUrls: ['./landing-page-menu.component.scss']
})
export class LandingPageMenuComponent implements OnInit {
  responsiveMenu: boolean = false;
  actualPage: any;
  fixedMenu: boolean = false;
  constructor(
    public translate: TranslateService,
    public router: Router,
    public amplitude: AmplitudeService,
  ) { }

  ngOnInit() {
    this.actualPage = this.router.url.replace('/', '');
    if (window.innerWidth < 1024) {
      $('#fixedMenu').removeClass('fixedMenu');
    }
    else {
      $('#fixedMenu').addClass('fixedMenu');
    }
  }

  toggleResponsiveMenu() {
    (this.responsiveMenu ? this.responsiveMenu = false : this.responsiveMenu = true)
  }

  returnHome() {
    this.router.navigate(['/']);
    this.amplitude.trackingClickMenuHome();
  }

  scrollToGlobal() {
    var element = $('#global').offset().top;
    if (window.innerWidth >= 1024) {
      element -= 100;
    }
    $('html, body').animate({
      scrollTop: element
    }, 700)

  }

  _window(): any {
    return window;
  };

  goToGv() {
    this.router.navigate(['/voluntario-global']);
    this.amplitude.trackingClickMenuVolun();
  }

  goToGe() {
    this.router.navigate(['/empreendedor-global']);
    this.amplitude.trackingClickMenuEmpred();
  }

  goToGt() {
    this.router.navigate(['/talento-global']);
    this.amplitude.trackingClickMenuTalent();
  }

  goToHost() {
    this.router.navigate(['/lar-global']);
    this.amplitude.trackingClickMenuLarGlo();
  }

  goToEmp() {
    this.amplitude.trackingClickMenuEmpres();
  }

  goToYou() {
    this.amplitude.trackingClickMenuYouth();
  }

  goToPass() {
    this.amplitude.trackingClickMenuPassa();
  }

  goToCamb() {
    this.amplitude.trackingClickMenuCambio();
  }

  goToSegu() {
    this.amplitude.trackingClickMenuSeguro();
  }

  goToBlogEmp() {
    this.amplitude.trackingClickMenuBlogEmp();
  }

  goToEstu() {
    this.amplitude.trackingClickMenuBlogEstud();
  }

  goToOpor() {
    this.amplitude.trackingClickMenuOportu();
  }

  goToCOVID() {
    this.amplitude.trackingClickMenuCOVID();
  }
}
