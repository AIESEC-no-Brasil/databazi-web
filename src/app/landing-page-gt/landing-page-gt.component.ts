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
    { name: 'Administração', description: 'Nessa experiência você encontrará oportunidades na área de gestão, vendas desenvolvimento de negócios ou finanças, com duração entre 3 meses e/ou 1 ano. Durante todo esse período você receberá bolsa-auxílio!', icon: './assets/images/subproduct-responsive.svg', link: 'https://aiesec.org/search?backgrounds=233,245,240,224,1286,1290,264&type=2&sort=relevance ' },
    { name: 'Marketing', description: 'Nessa experiência você encontrará vagas de digital marketing, UX, analista e/ou criador de conteúdo. Essas oportunidades poderão ser de duração entre 3 meses a 1 ano. E durante esse período você receberá bolsa-auxílio!', icon: './assets/images/subproduct-pay.svg', link: 'https://aiesec.org/search?backgrounds=253,1280,247,237&type=2&sort=relevance ' }
  ]

  // egito, ucrania, argentina, mexico e peru
  // countries : any = [
  //   { name: 'India', desc}
  // ]
  constructor(
  ) { }

  ngOnInit() {
  }


}
