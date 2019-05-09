import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-landing-page-host',
  templateUrl: './landing-page-host.component.html',
  styleUrls: ['./landing-page-host.component.scss']
})
export class LandingPageHostComponent implements OnInit {

  hostRequirements = [
    {
      icon: 'fas fa-bed',
      description: 'Ter ao menos uma Cama ou Colchão individual. Não é necessário um quarto individual.'
    },
    {
      icon: 'fas fa-key',
      description: 'Acesso ao banheiro, áreas comuns da casa e a residência.'
    },
    {
      icon: 'fas fa-briefcase',
      description: 'Experiência Voluntária.'
    },
    {
      icon: 'fas fa-tint',
      description: 'Água para uso.'
    },
    {
      icon: 'fas fa-globe-americas',
      description: 'Vontade de conhecer outras culturas.'
    }
  ]
  constructor(
  ) { 
  }

  redirectToForm(){
    $('html, body').animate({
      scrollTop: ($('#host-details-form-area').offset().top)
    },500);
  }

  ngOnInit() {
  }
}
