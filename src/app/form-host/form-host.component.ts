import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SignupService } from '../services/signup.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Message } from 'primeng/components/common/api';
import { TranslateService } from '../../../node_modules/@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import * as $ from 'jquery';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-host',
  templateUrl: './form-host.component.html',
  styleUrls: ['./form-host.component.scss']
})
export class FormHostComponent implements OnInit {

  @Input() formedUser: any;
  @Output() onCancelEvent = new EventEmitter<boolean>();

  user = {
    fullname: '',
    cellphone: '',
    email: '',
    local_committee: { id: '' },
    neighborhood: '',
    city: '',
    state: '',
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_term: '',
    utm_content: ''
  }

  filteredPlaces: Observable<any[]>;

  invalidEmail: boolean = false;
  invalidPassword: boolean = false;
  invalidDate: boolean = false;
  invalidPhone: boolean = false;
  loading: boolean = false;
  signUp: FormGroup;
  places: any;
  msgs: Message[] = [];
  submitted: boolean = false;

  constructor(
    public signupService: SignupService,
    public translate: TranslateService,
    public router: Router,
    public urlScrapper: ActivatedRoute
  ) {
    this.signUp = new FormGroup({
      fullname: new FormControl(this.user.fullname, [
        Validators.required
      ]),
      cellphone: new FormControl(this.user.cellphone, [
        Validators.required
      ]),
      email: new FormControl(this.user.email, [
        Validators.required
      ]),
      neighborhood: new FormControl(this.user.neighborhood, [
        Validators.required
      ]),
      city: new FormControl(this.user.city, [
        Validators.required
      ]),
      state: new FormControl(this.user.state, [
        Validators.required
      ]),
      local_committee_id: new FormControl(this.user.local_committee, [
        Validators.required
      ]),
    });
  }

  ngOnInit() {
    this.urlScrapper.queryParams.subscribe((param: any) => {
      if (param['utm_source']) {
        localStorage.setItem('utm_source', param['utm_source'])
      }

      if (param['utm_medium']) {
        localStorage.setItem('utm_medium', param['utm_medium'])
      }

      if (param['utm_campaign']) {
        localStorage.setItem('utm_campaign', param['utm_campaign'])
      }

      if (param['utm_term']) {
        localStorage.setItem('utm_term', param['utm_term'])
      }

      if (param['utm_content']) {
        localStorage.setItem('utm_content', param['utm_content'])
      }
    });

    this.fillPlacesSelect().then(() => {
      this.filteredPlaces = this.signUp.controls.local_committee_id.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter(value, this.places))
        );
    });
  }

  private _filter(value: string, options: any): any[] {
    const filterValue = value.length ? value.toLowerCase() : value;
    return options.filter(option => option.name.toLowerCase().includes(filterValue));
  }
  accessAiesec() {
    window.open("https://aiesec.org/", "_blank");
  }

  isValid(field) {
    return !this.signUp.controls[field].valid && (this.signUp.controls[field].dirty || this.submitted)
  }


  fillPlacesSelect() {
    return this.signupService.getLocalCommittees().then((res: any) => {
      let orderedList = _.orderBy(res, ['name'], ['asc']);
      this.places = orderedList;
    }, (err) => {
      this.msgs = [];
      this.msgs.push({ severity: 'error', summary: 'FALHA EM RECUPERAR DADOS!', detail: 'Não foi possível recuperar os dados das AIESEC disponíveis.' });
    })
  }

  unableToSubmit() {
    return this.emptyFields()
  }

  emptyFields() {
    return !(this.user.local_committee && !!this.user.local_committee.id) || !this.user.fullname || !this.user.email || !this.user.cellphone || !this.user.neighborhood || !this.user.city || !this.user.state;
  }

  checkPhone() {
    let cellphone = this.user.cellphone.replace(/[()_-]/g, '');

    if (cellphone.length < 11) {
      this.invalidPhone = true;
      return;
    }
    else {
      this.invalidPhone = false;
    }
  }



  submit() {
    this.submitted = true;
    if (this.unableToSubmit()){
      return;
    }
    let user = {
      gt_participant: {
        fullname: this.user.fullname,
        cellphone: this.user.cellphone.replace(/[()_-]/g, ''),
        email: this.user.email,
        local_committee_id: +this.user.local_committee.id,
        neighborhood: this.user.neighborhood,
        city: this.user.city,
        state: this.user.state,
        utm_source: (localStorage.getItem('utm_source') ? localStorage.getItem('utm_source') : null),
        utm_medium: (localStorage.getItem('utm_medium') ? localStorage.getItem('utm_medium') : null),
        utm_campaign: (localStorage.getItem('utm_campaign') ? localStorage.getItem('utm_campaign') : null),
        utm_term: (localStorage.getItem('utm_term') ? localStorage.getItem('utm_term') : null),
        utm_content: (localStorage.getItem('utm_content') ? localStorage.getItem('utm_content') : null)
      }
    };
    console.log('submit', user);
    this.loading = true;
    // this.signupService.addGtParticipant(user)
    //   .then((res: any) => {
    //     this.loading = false;
    //     if (res.status == 'failure') {
    //       this.msgs = [];
    //       this.msgs.push({ severity: 'error', summary: 'FALHA AO SALVAR!', detail: 'Não foi possível salvar, tente novamente mais tarde.' });
    //     }
    //     else {
    //       this.completedSignup = true;
    //       localStorage.removeItem('utm_source');
    //       localStorage.removeItem('utm_medium');
    //       localStorage.removeItem('utm_campaign');
    //       localStorage.removeItem('utm_term');
    //       localStorage.removeItem('utm_content');
    //       this.router.navigate(['/talento-global/obrigado']);
    //     }
    //   },
    //     (err) => {
    //       this.msgs = [];
    //       this.msgs.push({ severity: 'error', summary: 'ERRO AO SALVAR!', detail: 'Não foi possível salvar, tente novamente mais tarde.' });
    //       this.loading = false;
    //     }
    //   )
  }

  checkEmail() {
    this.signupService.checkValidEmail(this.user.email)
      .then((res: any) => {
        res.email_exists ? this.invalidEmail = true : this.invalidEmail = false;
      }, (err) => {
        this.msgs = [];
        this.msgs.push({ severity: 'error', summary: 'FALHA EM RECUPERAR DADOS!', detail: 'Não foi possível recuperar dados deste email.' });
      })
  }



  searchPlaces(event) {
    this.filteredPlaces = this._search(this.places, event.query);
  };

  _search(options, search) {
    return _.filter(options, (option) => {
      return option.name.toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "")
        .indexOf(
          search.toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, "")
        ) > -1;
    });
  };

  selectInput(element) {
    $('.form-group').css('z-index', '-1');
    $('.' + element).css('z-index', '10');
  }

  clearField(field) {
    this.user[field] = '';
  }
}