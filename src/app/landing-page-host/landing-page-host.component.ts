import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page-host',
  templateUrl: './landing-page-host.component.html',
  styleUrls: ['./landing-page-host.component.scss']
})
export class LandingPageHostComponent implements OnInit {

  hostRequirements = [
    {
      icon: 'fas fa-bed',
      description: 'Ao menos um colchão para o intercambista. Não é necessário quarto individual.'
    },
    {
      icon: 'fas fa-key',
      description: 'Acesso ao banheiro, áreas comuns da casa e a residência.'
    },
    {
      icon: 'fas fa-wifi',
      description: 'Acesso à internet.'
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

  ngOnInit() {
  }
}
