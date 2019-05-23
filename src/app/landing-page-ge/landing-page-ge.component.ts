import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page-ge',
  templateUrl: './landing-page-ge.component.html',
  styleUrls: ['./landing-page-ge.component.scss']
})
export class LandingPageGeComponent implements OnInit {
  
  actualPage : string;
  countries: any = [
    {
      name: 'Egito',
      image: './assets/products/ge/country-egito.jpg',
      flag: './assets/countries/egypt.svg',
      description: ' Minha experiência no Egito foi um divisor de águas tanto como pessoa quanto como profissional. Ao fazer o programa empreendedor global, pude viver uma troca muito intensa com pessoas de diversas nacionalidades.',
      link: 'https://aiesec.org/search?home_mcs=1609&type=5&earliest_start_date=2019-06-16&sort=-duration_min',
      active: true
    },
    { 
      name: 'Ucrânia',
      image: './assets/products/ge/country-hungary.png',
      flag: './assets/countries/ukraine.svg',
      description: "Realizei o programa Empreendedor Global pela AIESEC e fui parar na Ucrânia! Não sabia o que esperar daquele país do leste europeu, que, já adianto, me impressionou tanto! Trabalhei em uma StartUp chamada Twiga, onde encontrei pessoas que levarei para toda a vida, que me ensinaram muito sobre marketing e sobre a cultura ucraniana.", 
      link: 'https://aiesec.org/search?home_mcs=1610&type=5&earliest_start_date=2019-06-16&sort=-duration_min',
      active: false
    },
    { 
      name: 'Argentina', 
      image: './assets/products/ge/country-argentina.jpg',
      flag: './assets/countries/argentina.svg',
      description: 'Na Argentina trabalhei em uma Startup na área de marketing em que pude ter todo o suporte e liberdade! Além disso, meus chefes eram incríveis e me ajudaram e me ensinaram muito. Todo o dia era uma luta nova, erros e acertos e isso me fez crescer como pessoa', 
      link: 'https://aiesec.org/search?home_mcs=1535&type=5&earliest_start_date=2019-06-16&sort=-duration_min',
      active: false
    },
    { 
      name: 'México', 
      image: './assets/products/ge/country-mexico.jpg',
      flag: './assets/countries/mexico.svg',
      description: ' Tive a oportunidade de através do Empreendedor Global, me apaixonar pelo México, me desenvolver profissionalmente, que me deu a visão de como é começar um negócio e empreender e também me colocou em contato com atividades de diferentes áreas, me dando uma visão ampla das atividades de uma startup.', 
      link: 'https://aiesec.org/search?home_mcs=1589&type=5&earliest_start_date=2019-06-16&sort=-duration_min',
      active: false
    },
    { 
      name: 'Peru', 
      image: './assets/products/ge/country-peru.jpeg',
      flag: './assets/countries/peru.svg',
      description: 'Minha experiência de viver no Peru foi muito enriquecedora, principalmente no âmbito profissional, pois como estrangeira em outro país, as respostas para as minhas dúvidas estavam sempre em escutar, agir e me esforçar para entender como funciona tudo e me adaptar a uma equipe em uma Startup de um setor tão diferente do meu.', 
      link: 'https://aiesec.org/search?home_mcs=1553&type=5&earliest_start_date=2019-06-16&sort=-duration_min',
      active: false
    }
  ]

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
    this.checkUrl();
  }

  checkUrl(){
    this.actualPage = this.router.url.replace('/', '');
  }

}
