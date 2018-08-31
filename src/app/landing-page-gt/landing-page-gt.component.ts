import { Component, OnInit } from '@angular/core';
import { SignupService } from '../services/signup.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import * as moment from 'moment';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { TranslateService } from '../../../node_modules/@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page-gt',
  templateUrl: './landing-page-gt.component.html',
  styleUrls: ['./landing-page-gt.component.scss']
})
export class LandingPageGtComponent implements OnInit {

  responsiveMenu:boolean = false;
  constructor(
    public signupService: SignupService,
    public translate: TranslateService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  toggleResponsiveMenu(){
    (this.responsiveMenu ? this.responsiveMenu = false : this.responsiveMenu = true)
  }

}