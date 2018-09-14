import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgbCarouselConfig, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-landing-footer',
  templateUrl: './landing-footer.component.html',
  styleUrls: ['./landing-footer.component.scss'],
  providers: [NgbCarouselConfig, NgbCarousel]
})
export class LandingFooterComponent implements OnInit {

  @ViewChild('footercarousel') carousel: NgbCarousel;
  partners : object;
  

  next() {
    this.carousel.next()
  }

  prev() {
    this.carousel.prev()
  }

  constructor(config: NgbCarouselConfig, private router: Router) { 
    config.showNavigationIndicators = false;
    config.showNavigationArrows = false;
    config.interval = 20000;
    config.pauseOnHover = true;
    
  }
  
  ngOnInit() {
    // this.carousel.next()
    this.partners = {
      assistcard: {
        img: '../../assets/images/partners/assistcard.png',
        site: 'https://www.assistcard.com/b2c/aiesec-br',
      },
      delivery_much: {
        img: '../../assets/images/partners/delivery_much.png',
        site: 'https://www.deliverymuch.com.br/',
      },
      dhl: {
        img: '../../assets/images/partners/dhl.png',
        site: 'https://aiesec.org/partner/286836',
      },
      electrolux: {
        img: '../../assets/images/partners/electrolux.png',
        site: 'https://aiesec.org/partner/272692',
      },
      hyva: {
        img: '../../assets/images/partners/hyva.png',
        site: 'https://aiesec.org/partner/344322',
      },
      leroymerlin: {
        img: '../../assets/images/partners/leroymerlin.png',
        site: 'https://www.leroymerlin.com.br/blog',
      },
      mckinseyecompany: {
        img: '../../assets/images/partners/mckinseyecompany.png',
        site: 'https://www.mckinsey.com.br/',
      },
      mondelez: {
        img: '../../assets/images/partners/mondelez.png',
        site: 'https://br.mondelezinternational.com/home',
      },
      nestle: {
        img: '../../assets/images/partners/nestle.png',
        site: 'https://www.nestle.com.br/',
      },
      nokia: {
        img: '../../assets/images/partners/nokia.png',
        site: 'https://aiesec.org/partner/330494',
      },
      resultadosdigitais: {
        img: '../../assets/images/partners/resultadosdigitais.png',
        site: 'https://resultadosdigitais.com.br/',
      },
      sap: {
        img: '../../assets/images/partners/sap.png',
        site: 'https://www.sap.com/brazil/about.html',
      },
      votorantimcimentos: {
        img: '../../assets/images/partners/votorantimcimentos.png',
        site: 'https://www.votorantimcimentos.com.br/',
      },
      Whirlpoow: {
        img: '../../assets/images/partners/Whirlpoow.png',
        site: 'https://www.whirlpool.com.br/',
      },
    }

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }

}
