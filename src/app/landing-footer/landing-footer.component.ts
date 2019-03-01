import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import * as $ from 'jquery';
import 'hammerjs';

@Component({
  selector: 'app-landing-footer',
  templateUrl: './landing-footer.component.html',
  styleUrls: ['./landing-footer.component.scss'],
})
export class LandingFooterComponent implements OnInit {

  partners: any;
  sliderPosition: number = 0;
  timer: any;
  window: any = window;

  navTo(partnerPage) {
    window.open(partnerPage, '_blank');
  }

  constructor(private router: Router) {
    this.partners = [];
    this.window.Modernizr && this.window.Modernizr.on('webp', (result) => {
      let webpSupport = false;

      if (result) {
        webpSupport = result.lossless;
      }

      this.partners = [
        {
          title: 'Aerlíneas Argentinas',
          img: webpSupport ? '../../assets/images/partners/aerolineasargentinas.png.webp' : '../../assets/images/partners/aerolineasargentinas.png',
          site: 'https://www.aerolineas.com.ar/',
        },
        {
          title: 'Aneic',
          img: webpSupport ? '../../assets/images/partners/aneic.png.webp' : '../../assets/images/partners/aneic.png',
          site: 'https://www.facebook.com/ANEICArgen/',
        },
        {
          title: 'April',
          img: webpSupport ? '../../assets/images/partners/april.png.webp' : '../../assets/images/partners/april.png',
          site: 'http://bit.ly/Seguros-AIESECArgentina',
        },
        {
          title: 'Banco de Alimentos',
          img: webpSupport ? '../../assets/images/partners/bancodealimentos.png.webp' : '../../assets/images/partners/bancodealimentos.png',
          site: 'https://www.bancodealimentos.org.ar/',
        },
        {
          title: 'CF',
          img: webpSupport ? '../../assets/images/partners/cf.png.webp' : '../../assets/images/partners/cf.png',
          site: 'http://www.circuloformacion.es/area-negocio/fiep',

        },
        {
          title: 'DHL',
          img: webpSupport ? '../../assets/images/partners/dhl.png.webp' : '../../assets/images/partners/dhl.png',
          site: 'https://www.logistics.dhl/ar-es/home.html',
        },
        {
          title: 'Electrolux',
          img: webpSupport ? '../../assets/images/partners/electrolux.png.webp' : '../../assets/images/partners/electrolux.png',
          site: 'http://www.electrolux.com.ar/',

        },
        {
          title: 'GSK',
          img: webpSupport ? '../../assets/images/partners/gsk.png.webp' : '../../assets/images/partners/gsk.png',
          site: 'https://ar.gsk.com/', 

        },
        {
          title: 'unjuve',
          img: webpSupport ? '../../assets/images/partners/injuve.jpg.webp' : '../../assets/images/partners/injuve.jpg',
          site: 'http://www.injuve.gob.sv/',

        },
        {
          title: 'JCI',
          img: webpSupport ? '../../assets/images/partners/jci.png.webp' : '../../assets/images/partners/jci.png',
          site: 'https://jciargentina.org.ar/',
        },
        {
          title: 'Scalabl',
          img: webpSupport ? '../../assets/images/partners/scalabl.png.webp' : '../../assets/images/partners/scalabl.png',
          site: 'https://www.scalabl.com/academy/buenos-aires-startup-academy/?gclid=Cj0KCQiA-onjBRDSARIsAEZXcKbjNL1sPADH-vzzFLkcHI17goK5Tt3tUK2R1IZd5J88wqAzwnM03ToaAgYfEALw_wcB',

        },
        {
          title: 'Scouts',
          img: webpSupport ? '../../assets/images/partners/scouts.png.webp' : '../../assets/images/partners/scouts.png',
          site: 'https://www.scouts.org.ar/',

        },
        {
          title: 'Siglo 21',
          img: webpSupport ? '../../assets/images/partners/siglo21.png.webp' : '../../assets/images/partners/siglo21.png',
          site: 'http://www.tandil.siglo21.com.ar/landing/',

        },
        {
          title: 'Techo',
          img: webpSupport ? '../../assets/images/partners/techo.png.webp' : '../../assets/images/partners/techo.png',
          site: 'https://www.techo.org/argentina/',
        },
        {
          title: 'Unicef',
          img: webpSupport ? '../../assets/images/partners/unicef.png.webp' : '../../assets/images/partners/unicef.png',
          site: 'https://www.unicef.org/argentina/',
        },
        {
          title: 'Unilever',
          img: webpSupport ? '../../assets/images/partners/unilever.png.webp' : '../../assets/images/partners/unilever.png',
          site: 'https://www.unilever.com.ar/',
        }
      ];
    });
  }

  ngOnInit() {
    window.scrollTo(0, 0)
    this.sliderAnimation();
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }

  swipe(side: string) {
    side == 'left' ? this.moveRight() : this.moveLeft();
  }

  moveLeft() {
    if ((this.sliderPosition - 100) < 0 && (window.innerWidth >= 990)) {
      this.sliderPosition = 300;
    }
    else if ((this.sliderPosition - 100) < 0 && (window.innerWidth < 990)) {
      this.sliderPosition = 500;
    }
    else {
      this.sliderPosition -= 100;
    }
    $('.footer-carousel-wrapper').animate({ left: '-' + this.sliderPosition + '%' });
    this.sliderAnimation();
  }

  moveRight() {
    if ((this.sliderPosition + 100) > 300 && (window.innerWidth >= 990)) {
      this.sliderPosition = 0; 
    }
    else if ((this.sliderPosition + 100) > 500 && (window.innerWidth < 990)) {
      this.sliderPosition = 0;
    }
    else {
      this.sliderPosition += 100
    }
    $('.footer-carousel-wrapper').animate({ left: '-' + this.sliderPosition + '%' });
    this.sliderAnimation()
  }

  sliderAnimation() {
    this.stopAnimation();
    this.timer = setInterval(() => {
      this.moveRight()
    }, 10000);
  }

  stopAnimation() {
    clearInterval(this.timer)
  }

  openUrl(site) {
    window.open(site);
  }

  goToGv() {
    this.router.navigate(['/voluntario-global']);
  }

  goToGe() {
    this.router.navigate(['/emprendedor-global']);
  }

  goToGt() {
    this.router.navigate(['/talento-global']);
  }
}
