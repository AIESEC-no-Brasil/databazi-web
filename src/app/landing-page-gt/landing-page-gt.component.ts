import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page-gt',
  templateUrl: './landing-page-gt.component.html',
  styleUrls: ['./landing-page-gt.component.scss']
})
export class LandingPageGtComponent implements OnInit {

  subproducts: any = [
    { name: 'Educacional', description: 'Nessa experiência você irá dar aulas de inglês ou alguma outra matéria. Podendo ser em Universidades, Escolas de línguas ou instituições de ensino. Duração de 3 meses e/ou 1 ano. Durante esse período você receberá bolsa-auxílio!', icon: './assets/images/subproduct-promotion.svg', link: 'https://aiesec.org/search?backgrounds=241,1289,251,252&type=2&sort=relevance' },
    { name: 'Tecnologia da Informação', description: 'Nessa experiência você poderá encontrar oportunidades de Back-End, Front-End, Desk Support e outros, com duração entre 3 meses e/ou 1 ano. Durante esse período você receberá bolsa-auxílio!', icon: './assets/images/subproduct-teamwork.svg', link: 'https://aiesec.org/search?backgrounds=268,1298,239,238&type=2&sort=relevance ' },
    { name: 'Administração', description: 'Nessa experiência você encontrará oportunidades na área de gestão, vendas, desenvolvimento de negócios ou finanças, com duração entre 3 meses e/ou 1 ano. Durante todo esse período você receberá bolsa-auxílio!', icon: './assets/images/subproduct-responsive.svg', link: 'https://aiesec.org/search?backgrounds=233,245,240,224,1286,1290,264&type=2&sort=relevance ' },
    { name: 'Marketing', description: 'Nessa experiência você encontrará vagas de digital marketing, UX, analista e/ou criador de conteúdo. Essas oportunidades poderão ser de duração entre 3 meses a 1 ano. E durante esse período você receberá bolsa-auxílio!', icon: './assets/images/subproduct-pay.svg', link: 'https://aiesec.org/search?backgrounds=253,1280,247,237&type=2&sort=relevance ' }
  ]

  countries: any = [
    {
      name: 'India',
      image: './assets/products/gt/country-india.jpeg',
      flag: './assets/countries/india.svg',
      description: 'Foi um grande prazer olhar para o rosto de jovens estudantes na Amty University rindo e vibrando com todas as minhas histórias trabalhando com diferentes culturas e vivendo fora do meu país. Posso apenas agradecer á AIESEC, e à Amty University por esse momento',
      link: 'https://aiesec.org/search?home_mcs=1585&type=2&sort=relevance',
      active: true
    },
    { 
      name: 'Hungria',
      image: './assets/products/gt/country-hungria.jpeg',
      flag: './assets/countries/hungary.svg',
      description: 'Trabalhar em uma empresa com um ambiente multicultural, fez com que eu me desafiasse e conhecesse até mesmo um pouquinho de cada canto do mundo. Essa experiência com certeza mudou minha perspectiva profissional e me fez crescer de uma maneira que nunca pudesse ter imaginado', 
      link: 'https://aiesec.org/search?home_mcs=1549&is_gep=true&type=2&sort=relevance',
      active: false
    },
    { 
      name: 'Canadá', 
      image: './assets/products/gt/country-canada.jpeg',
      flag: './assets/countries/canada.svg',
      description: 'O mais importante dessa jornada não foi tudo aquilo que eu vi, vivi ou conheci, mas sim todas as coisas dentro de mim que mudaram, graças ao autoconhecimento adquirido durante o intercâmbio eu pude me transformar numa pessoa melhor e seres humanos melhores fazem do mundo um lugar melhor.', 
      link: 'https://aiesec.org/search?home_mcs=1554&type=2&sort=relevance',
      active: false
    },
    { 
      name: 'México', 
      image: './assets/products/gt/country-mexico.jpeg',
      flag: './assets/countries/mexico.svg',
      description: 'O intercâmbio profissional que eu vivi no México foi uma experiência divisora de águas que apesar de já ter passado ela ainda vive em mim. Me propor a trabalhar em um lugar onde eu não sabia a língua, viver em condições distantes de qualquer realidade que eu poderia haver imaginado antes e ter uma experiência que me fez crescer como profissional ao mesmo tempo foi o que eu precisava para viver com a vontade latente de estar em uma ponte aérea.', 
      link: 'https://aiesec.org/search?home_mcs=1589&type=2&sort=relevance',
      active: false
    },
    { 
      name: 'Colombia', 
      image: './assets/products/gt/country-colombia.JPG',
      flag: './assets/countries/colombia.svg',
      description: 'De um modo geral, e de todos os intercâmbios que eu já fiz, esse para a Colômbia foi o mais intenso e desafiador, mas que mais valeu a pena. Consegui desenvolver muitas habilidades que tinha interesse, descobri competências que não sabia que tinha e trabalhei pontos que eu não sabia que precisava.', 
      link: 'https://aiesec.org/search?home_mcs=1551&type=2&sort=relevance',
      active: false
    }
  ]
  constructor(
  ) { }

  ngOnInit() {
  }


}
