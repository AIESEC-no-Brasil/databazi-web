import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-landing-page-host',
  templateUrl: './landing-page-host.component.html',
  styleUrls: ['./landing-page-host.component.scss']
})
export class LandingPageHostComponent implements OnInit {

  user = {
    fullname: ''
  }

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
    this.contactForm = new FormGroup({
      fullname: new FormControl(this.user.fullname, [
        Validators.required
      ])
    })
  }

  ngOnInit() {
  }

  isValid(field) {
    return !this.contactForm.controls[field].valid && (this.contactForm.controls[field].dirty || this.submitted)
  }

  submit(){
    this.submitted = true;
    let user = {
      fullname : this.user.fullname
    }
    this.loading = true;
    console.log(user);
  }

}
