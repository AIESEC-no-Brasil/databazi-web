import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-landing-page-host',
  templateUrl: './landing-page-host.component.html',
  styleUrls: ['./landing-page-host.component.scss']
})
export class LandingPageHostComponent implements OnInit {

  hostRequirements = [
    {
      description: 'Ao menos um colchão para o intercambista. Não é necessário quarto individual.'
    },
    {
      description: 'Acesso ao banheiro, áreas comuns da casa e a residência.'
    },
    {
      description: 'Acesso à internet.'
    },
    {
      description: 'Água para uso.'
    },
    {
      description: 'Vontade de conhecer outras culturas.'
    }
  ]
  contactForm: FormGroup;
  submitted: boolean = false;
  loading: boolean = false;
  constructor(
  ) { 
  }

  ngOnInit() {
  }
}
