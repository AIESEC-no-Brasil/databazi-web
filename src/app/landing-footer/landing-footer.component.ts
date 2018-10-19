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

  navTo(partnerPage) {
    window.open(partnerPage, '_blank');
  }

  constructor(private router: Router) {
    this.partners = [
      {
        title: 'Assist Card',
        img: '../../assets/images/partners/assistcard.png',
        site: 'https://www.assistcard.com/b2c/aiesec-br',
      },
      {
        title: 'Delivery Much',
        img: '../../assets/images/partners/delivery_much.png',
        site: 'https://www.deliverymuch.com.br/',
      },
      {
        title: 'DHL',
        img: '../../assets/images/partners/dhl.png',
        site: 'https://aiesec.org/partner/286836',
      },
      {
        title: 'Electrolux',
        img: '../../assets/images/partners/electrolux.png',
        site: 'https://aiesec.org/partner/272692',
      },
      {
        title: 'Hyva',
        img: '../../assets/images/partners/hyva.png',
        site: 'https://aiesec.org/partner/344322',

      },
      {
        title: 'Leroy Merlin',
        img: '../../assets/images/partners/leroymerlin.png',
        site: 'https://www.leroymerlin.com.br/blog',
      },
      {
        title: 'McKinsey & Company',
        img: '../../assets/images/partners/mckinseyecompany.png',
        site: 'https://www.mckinsey.com.br/',

      },
      {
        title: 'Mondelez',
        img: '../../assets/images/partners/mondelez.png',
        site: 'https://br.mondelezinternational.com/home',

      },
      {
        title: 'Nestle',
        img: '../../assets/images/partners/nestle.png',
        site: 'https://www.nestle.com.br/',
      },
      {
        title: 'Nokia',
        img: '../../assets/images/partners/nokia.png',
        site: 'https://aiesec.org/partner/330494',

      },
      {
        title: 'Resultados Digitais',
        img: '../../assets/images/partners/resultadosdigitais.png',
        site: 'https://resultadosdigitais.com.br/',

      },
      {
        title: 'SAP',
        img: '../../assets/images/partners/sap.png',
        site: 'https://www.sap.com/brazil/about.html',

      },
      {
        title: 'Votorantim Cimentos',
        img: '../../assets/images/partners/votorantimcimentos.png',
        site: 'https://www.votorantimcimentos.com.br/',
      },
      {
        title: 'Whirlpool',
        img: '../../assets/images/partners/Whirlpoow.png',
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
    this.stopAnimation();
    side == 'left' ? this.moveRight() : this.moveLeft();
  }

  moveLeft() {
    this.stopAnimation();
    if ((this.sliderPosition - 100) < 0) {
      this.sliderPosition = 200;
    }
    else {
      this.sliderPosition -= 100;
    }
    $('.footer-carousel-wrapper').animate({ left: '-' + this.sliderPosition + '%' });
  }

  moveRight() {
    this.stopAnimation();
    if ((this.sliderPosition + 100) > 200) {
      this.sliderPosition = 0;
    }
    else {
      this.sliderPosition += 100
    }
    $('.footer-carousel-wrapper').animate({ left: '-' + this.sliderPosition + '%' });
  }

  sliderAnimation() {
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
}
