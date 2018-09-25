import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../../../node_modules/@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page-menu',
  templateUrl: './landing-page-menu.component.html',
  styleUrls: ['./landing-page-menu.component.scss']
})
export class LandingPageMenuComponent implements OnInit {
  responsiveMenu:boolean = false;
  actualPage : any;
  constructor(
    public translate: TranslateService,
    public router: Router
  ) { }

  ngOnInit() {
    this.actualPage = this.router.url.replace('/','');
  }

  toggleResponsiveMenu(){
    (this.responsiveMenu ? this.responsiveMenu = false : this.responsiveMenu = true)  
  }

  returnHome(){
    this.router.navigate(['/']);
  }

  scrollToGlobal(){
    var element = document.getElementById('global');
    element.scrollIntoView({
      block: 'start',
      behavior: 'smooth'
    });
  }
}
