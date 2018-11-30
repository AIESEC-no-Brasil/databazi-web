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
  window:any = window;

  navTo(partnerPage) {
    window.open(partnerPage, '_blank');
  }

  constructor(private router: Router) {

    let webpSupport = this.window.Modernizr && this.window.Modernizr.webp && this.window.Modernizr.webp.lossless ? true : false;

    console.log("websupport", webpSupport);

    this.partners = [
      {
        title: 'Assist Card',
        img: webpSupport ? '../../assets/images/partners/assistcard.png.webp' : '../../assets/images/partners/assistcard.png',
        site: 'https://www.assistcard.com/b2c/aiesec-br',
      },
      {
        title: 'Delivery Much',
        img: webpSupport ? '../../assets/images/partners/delivery_much.png.webp' : '../../assets/images/partners/delivery_much.png',
        site: 'https://www.deliverymuch.com.br/',
      },
      {
        title: 'DHL',
        img: webpSupport ? '../../assets/images/partners/dhl.png.webp' : '../../assets/images/partners/dhl.png',
        site: 'https://aiesec.org/partner/286836',
      },
      {
        title: 'Electrolux',
        img: webpSupport ? '../../assets/images/partners/electrolux.png.webp' : '../../assets/images/partners/electrolux.png',
        site: 'https://aiesec.org/partner/272692',
      },
      {
        title: 'Hyva',
        img: webpSupport ? '../../assets/images/partners/hyva.png.webp' : '../../assets/images/partners/hyva.png',
        site: 'https://aiesec.org/partner/344322',

      },
      {
        title: 'Leroy Merlin',
        img: webpSupport ? '../../assets/images/partners/leroymerlin.png.webp' : '../../assets/images/partners/leroymerlin.png',
        site: 'https://www.leroymerlin.com.br/blog',
      },
      {
        title: 'McKinsey & Company',
        img: webpSupport ? '../../assets/images/partners/mckinseyecompany.png.webp' : '../../assets/images/partners/mckinseyecompany.png',
        site: 'https://www.mckinsey.com.br/',

      },
      {
        title: 'Mondelez',
        img: webpSupport ? '../../assets/images/partners/mondelez.png.webp' : '../../assets/images/partners/mondelez.png',
        site: 'https://br.mondelezinternational.com/home',

      },
      {
        title: 'Nestle',
        img: webpSupport ? '../../assets/images/partners/nestle.png.webp' : '../../assets/images/partners/nestle.png',
        site: 'https://www.nestle.com.br/',
      },
      {
        title: 'Nokia',
        img: webpSupport ? '../../assets/images/partners/nokia.png.webp' : '../../assets/images/partners/nokia.png',
        site: 'https://aiesec.org/partner/330494',

      },
      {
        title: 'Resultados Digitais',
        img: webpSupport ? '../../assets/images/partners/resultadosdigitais.png.webp' : '../../assets/images/partners/resultadosdigitais.png',
        site: 'https://resultadosdigitais.com.br/',

      },
      {
        title: 'SAP',
        img: webpSupport ? '../../assets/images/partners/sap.png.webp' : '../../assets/images/partners/sap.png',
        site: 'https://www.sap.com/brazil/about.html',

      },
      {
        title: 'Votorantim Cimentos',
        img: webpSupport ? '../../assets/images/partners/votorantimcimentos.png.webp' : '../../assets/images/partners/votorantimcimentos.png',
        site: 'https://www.votorantimcimentos.com.br/',
      },
      {
        title: 'Whirlpool',
        img: webpSupport ? '../../assets/images/partners/Whirlpoow.png.webp' : '../../assets/images/partners/Whirlpoow.png',
        site: 'https://www.whirlpool.com.br/',
      },
    ]
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
      this.sliderPosition = 200;
    }
    else if ((this.sliderPosition - 100) < 0 && (window.innerWidth < 990)) {
      this.sliderPosition = 400;
    }
    else {
      this.sliderPosition -= 100;
    }
    $('.footer-carousel-wrapper').animate({ left: '-' + this.sliderPosition + '%' });
    this.sliderAnimation();
  }

  moveRight() {
    if ((this.sliderPosition + 100) > 200 && (window.innerWidth >= 990)) {
      this.sliderPosition = 0;
    }
    else if ((this.sliderPosition + 100) > 400 && (window.innerWidth < 990)) {
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
