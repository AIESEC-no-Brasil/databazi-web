import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-landing-footer',
  templateUrl: './landing-footer.component.html',
  styleUrls: ['./landing-footer.component.scss'],
})
export class LandingFooterComponent implements OnInit {

  partners: any;
  sliderPosition: number = 0;

  navTo(partnerPage) {
    window.open(partnerPage, '_blank');
  }

  constructor(private router: Router) {
    this.partners = [
      {
        title: 'assistcard',
        img: '../../assets/images/partners/assistcard.png',
        site: 'https://www.assistcard.com/b2c/aiesec-br',
      },
      {
        title: 'delivery_much',
        img: '../../assets/images/partners/delivery_much.png',
        site: 'https://www.deliverymuch.com.br/',
      },
      {
        title: 'dhl',
        img: '../../assets/images/partners/dhl.png',
        site: 'https://aiesec.org/partner/286836',
      },
      {
        title: 'electrolux',
        img: '../../assets/images/partners/electrolux.png',
        site: 'https://aiesec.org/partner/272692',
      },
      {
        title: 'hyva',
        img: '../../assets/images/partners/hyva.png',
        site: 'https://aiesec.org/partner/344322',

      },
      {
        title: 'leroymerlin',
        img: '../../assets/images/partners/leroymerlin.png',
        site: 'https://www.leroymerlin.com.br/blog',
      },
      {
        title: 'mckinseyecompany',
        img: '../../assets/images/partners/mckinseyecompany.png',
        site: 'https://www.mckinsey.com.br/',

      },
      {
        title: 'mondelez',
        img: '../../assets/images/partners/mondelez.png',
        site: 'https://br.mondelezinternational.com/home',

      },
      {
        title: 'nestle',
        img: '../../assets/images/partners/nestle.png',
        site: 'https://www.nestle.com.br/',
      },
      {
        title: 'nokia',
        img: '../../assets/images/partners/nokia.png',
        site: 'https://aiesec.org/partner/330494',

      },
      {
        title: 'resultadosdigitais',
        img: '../../assets/images/partners/resultadosdigitais.png',
        site: 'https://resultadosdigitais.com.br/',

      },
      {
        title: 'sap',
        img: '../../assets/images/partners/sap.png',
        site: 'https://www.sap.com/brazil/about.html',

      },
      {
        title: 'votorantimcimentos',
        img: '../../assets/images/partners/votorantimcimentos.png',
        site: 'https://www.votorantimcimentos.com.br/',
      },
      {
        title: 'Whirlpoow',
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

  moveLeft() {
    if ((this.sliderPosition - 100) < 0){
      this.sliderPosition = 200;
    }
    else {
      this.sliderPosition -= 100;
    }
    $('.footer-carousel-wrapper').animate({ left: '-' + this.sliderPosition + '%' });
  }

  moveRight() {
    if ((this.sliderPosition + 100) > 200){
      this.sliderPosition = 0;
    } 
    else {
      this.sliderPosition += 100
    }
    $('.footer-carousel-wrapper').animate({ left: '-' + this.sliderPosition + '%' });
  }

  sliderAnimation() {
    setInterval(() => {
      this.moveRight()
    }, 10000);
  }

  openUrl(site){
    window.open(site);
  }
}
