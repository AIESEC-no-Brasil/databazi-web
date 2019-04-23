import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../../../node_modules/@ngx-translate/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-landing-page-menu',
  templateUrl: './landing-page-menu.component.html',
  styleUrls: ['./landing-page-menu.component.scss']
})
export class LandingPageMenuComponent implements OnInit {
  responsiveMenu:boolean = false;
  actualPage : any;
  fixedMenu:boolean = false;
  constructor(
    public translate: TranslateService,
    public router: Router
  ) { }

  ngOnInit() {
    this.actualPage = this.router.url.replace('/','');
    if (window.innerWidth < 1024){
      $('#fixedMenu').removeClass('fixedMenu');
    }
    else {
      $('#fixedMenu').addClass('fixedMenu');
    }
  }

  toggleResponsiveMenu(){
    (this.responsiveMenu ? this.responsiveMenu = false : this.responsiveMenu = true)  
  }

  returnHome(){
    this.router.navigate(['/']);
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
