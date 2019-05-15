import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page-gv',
  templateUrl: './landing-page-gv.component.html',
  styleUrls: ['./landing-page-gv.component.scss'],
})

export class LandingPageGvComponent implements OnInit {
  
  actualPage : string;
  countries: any = [
    {
      name: 'Argentina',
      image: './assets/products/gv/country-argentina.jpg',
      flag: './assets/countries/argentina.svg',
      description: ' A minha experiência foi incrível! Conheci diversas culturas, comi comidas de diversos países e pude me desenvolver mais socialmente. Dei aula de inglês e matemática para crianças e adolescentes, aprendi muito com eles o que me fez ter uma visão diferente e dar valor melhor ao que tenho.',
      link: 'https://aiesec.org/search?home_mcs=1535&earliest_start_date=2019-06-01&type=1&sort=-duration_min',
      active: true
    },
    { 
      name: 'Peru',
      image: './assets/products/gv/country-peru.jpg',
      flag: './assets/countries/peru.svg',
      description: "Acredito que existam duas Amandas: uma antes e uma depois do intercâmbio. No começo eu olhava para o diferente e já vinha um pensamento mais julgador, que entendia apenas como 'certo' aquilo que me tinha sido ensinado como verdade. Depois de vivenciar o outro, meus pensamentos não se diferenciavam mais entre 'certo' ou 'errado', mas 'diferente'. Foram dias incríveis!", 
      link: 'https://aiesec.org/search?home_mcs=1553&earliest_start_date=2019-06-01&type=1&sort=-duration_min',
      active: false
    },
    { 
      name: 'Colômbia', 
      image: './assets/products/gv/country-colombia.jpg',
      flag: './assets/countries/colombia.svg',
      description: 'As pessoas da Colômbia são muito receptivas! Lá fiz amigos que viraram família. Onde até hoje tenho contato e sempre busco visitar. Aprendi muito mais de mim mesmo como: quem sou, o que quero, meus valores e crenças.', 
      link: 'https://aiesec.org/search?home_mcs=1551&earliest_start_date=2019-06-01&type=1&sort=-duration_min',
      active: false
    },
    { 
      name: 'México', 
      image: './assets/products/gv/country-mexico.jpg',
      flag: './assets/countries/mexico.svg',
      description: ' Intercâmbio é uma troca entre duas ou mais partes, dei o meu melhor para mudar Chihuahua, e tenho certeza que não sou a mesma pessoa depois dessa experiência. Estar sozinha em outro país de língua e cultura diferente significa descobrir algo novo todos os dias.', 
      link: 'https://aiesec.org/search?home_mcs=1589&earliest_start_date=2019-06-01&type=1&sort=-duration_min',
      active: false
    },
    { 
      name: 'Costa Rica', 
      image: './assets/products/gv/country-costarica.jpeg',
      flag: './assets/countries/costa-rica.svg',
      description: 'Na minha experiência aprendi muito com o meu grupo, viramos um time que se confiava muito, que passou todo intercâmbio sem internet e que tínhamos somente uns aos outros. Brigamos, sorrimos, choramos, viajamos, e saímos dessa experiência outras pessoas.', 
      link: 'https://aiesec.org/search?home_mcs=577&earliest_start_date=2019-06-01&type=1&sort=-duration_min',
      active: false
    },
    { 
      name: 'Portugal', 
      image: './assets/products/gv/country-portugal.jpg',
      flag: './assets/countries/portugal.svg',
      description: 'Ter trabalhado em um lar de idosos e vivido uma semana e meia em Portugal foi com certeza uma das melhores experiências da minha vida, pois fez me desafiar a trabalhar com situações e atividades que não possuía qualquer experiência, mas foi o que mostrou a essência do que é um trabalho voluntário.', 
      link: 'https://aiesec.org/search?home_mcs=1544&earliest_start_date=2019-06-01&type=1&sort=-duration_min',
      active: false
    },
    { 
      name: 'Itália', 
      image: './assets/products/gv/country-italia.JPG',
      flag: './assets/countries/italy.svg',
      description: 'A experiência foi maravilhosa! As crianças com quem eu trabalhei eram super educadas e animadas, e eu realmente senti que fiz a diferença na vida delas! O projeto serviu não apenas para ensinar inglês aos alunos, mas também para para trazer um pouco da cultura brasileira e de outros países que eu já tinha visitado.', 
      link: 'https://aiesec.org/search?home_mcs=1542&earliest_start_date=2019-06-01&type=1&sort=-duration_min',
      active: false
    },
    { 
      name: 'Romênia', 
      image: './assets/products/gv/country-romenia.JPG',
      flag: './assets/countries/romania.svg',
      description: 'Fui para Romênia para principalmente treinar o meu inglês e o que recebi foram amigos que se importaram comigo e compartilharam suas histórias e visões diferentes da minha, muito autoconhecimento e um senso muito grande de que eu tenho uma capacidade muito grande e responsabilidade também.', 
      link: 'https://aiesec.org/search?home_mcs=1560&earliest_start_date=2019-06-01&type=1&sort=-duration_min',
      active: false
    }
  ]

  constructor(
    public router: Router
  ) {
  }

  ngOnInit() {
    this.checkUrl();
  }

  checkUrl(){
    this.actualPage = this.router.url.replace('/', '');
  }

}
