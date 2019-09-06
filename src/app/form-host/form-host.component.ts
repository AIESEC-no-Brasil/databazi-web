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
import { Http } from '@angular/http';

@Component({
  selector: 'app-form-host',
  templateUrl: './form-host.component.html',
  styleUrls: ['./form-host.component.scss']
})
export class FormHostComponent implements OnInit {

  window:any = window;

  @Input() formedUser: any;

  user = {
    fullname: '',
    cellphone: '',
    email: '',
    local_committee: { id: '' },
    cep: '',
    neighborhood: '',
    city: '',
    state: '',
    cellphone_contactable: true,
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_term: '',
    utm_content: ''
  }

  modal: boolean = false;
  filteredPlaces: Observable<any[]>;

  invalidEmail: boolean = false;
  invalidPassword: boolean = false;
  invalidDate: boolean = false;
  invalidPhone: boolean = false;
  invalidZipcode: boolean = false;
  hasZipCode: boolean = false;
  loading: boolean = false;
  signUp: FormGroup;
  places: any;
  msgs: Message[] = [];
  submitted: boolean = false;
  completeSignup: boolean = false;

  constructor(
    public signupService: SignupService,
    public translate: TranslateService,
    public router: Router,
    public urlScrapper: ActivatedRoute,
    public http: Http
  ) {
    this.signUp = new FormGroup({
      fullname: new FormControl(this.user.fullname, [
        Validators.required
      ]),
      cellphone: new FormControl(this.user.cellphone, [
        Validators.required
      ]),
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.pattern(/^(([^*?<>().,;:\s@]+(\.[^*?<>().,;:\s@]+)*))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      ]),
      neighborhood: new FormControl(this.user.neighborhood, [
        Validators.required
      ]),
      city: new FormControl(this.user.city, [
        Validators.required
      ]),
      cep: new FormControl(this.user.cep, [
        Validators.required
      ]),
      state: new FormControl(this.user.state, [
        Validators.required
      ]),
      local_committee_id: new FormControl(this.user.local_committee, [
        Validators.required
      ]),
      cellphone_contactable: new FormControl(this.user.cellphone_contactable, [
        Validators.required
      ])
    });
    this.detectKeypress();
  }

  detectKeypress(){
    $(document).keyup((event) => {
      if (this.modal && event.keyCode == 27){
        this.closeModal()
      }
    })
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
    return !(this.user.local_committee && !!this.user.local_committee.id) || !this.user.fullname || !this.user.email || !this.user.cellphone || !this.user.city || !this.user.state;
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

  getZipcode(zipcode) {
    return this.http.get('https://viacep.com.br/ws/' + zipcode + '/json/').subscribe((res: any) => {
      let data = res.json();
      if (!data.erro) {
        this.invalidZipcode = false;
        this.hasZipCode = true;
        this.user.neighborhood = (data.bairro ? data.bairro : 'Não encontrado');
        this.user.city = data.localidade;
        this.user.state = data.uf;
      }
      else {
        this.user.neighborhood = '';
        this.user.city = '';
        this.user.state = ''; 
        this.invalidZipcode = true;
        this.hasZipCode = false;
      }

    }, (err: any) => {
      this.invalidZipcode = true;
      this.hasZipCode = false;
    });
  }

  submit() {
    this.submitted = true;
    if (this.unableToSubmit()) {
      return;
    }
    let user = {
      exchange_student_host: {
        fullname: this.user.fullname,
        cellphone: this.user.cellphone.replace(/[()_-]/g, ''),
        email: this.user.email,
        local_committee_id: +this.user.local_committee.id,
        neighborhood: (this.user.neighborhood ? this.user.neighborhood : 'Não encontrado'),
        zipcode: this.user.cep,
        city: this.user.city,
        state: this.user.state,
        cellphone_contactable: this.user.cellphone_contactable,
      }
    };
    this.loading = true;
    this.redirectToForm();
    this.signupService.addHostParticipant(user)
      .then((res: any) => {
        this.loading = false;
        if (res.status == 'failure') {
          this.msgs = [];
          this.msgs.push({ severity: 'error', summary: 'FALHA AO SALVAR!', detail: 'Não foi possível salvar, tente novamente mais tarde.' });
        }
        else {
          localStorage.removeItem('utm_source');
          localStorage.removeItem('utm_medium');
          localStorage.removeItem('utm_campaign');
          localStorage.removeItem('utm_term');
          localStorage.removeItem('utm_content');
          this.completeSignup = true;
          this.window.ga('set', 'page', '/lar-global/obrigado');
          this.window.ga('send', 'pageview');
        }
      },
        (err) => {
          this.msgs = [];
          this.msgs.push({ severity: 'error', summary: 'ERRO AO SALVAR!', detail: 'Não foi possível salvar, tente novamente mais tarde.' });
          this.loading = false;
        }
      )
  }

  redirectToForm(){
    $('html, body').animate({
      scrollTop: ($('#host-details-form-area').offset().top)
    },500);
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
    $('#content-terms').css('z-index', '0');
    $('.select-autocomplete').css('z-index', '10');
  }

  clearField(field) {
    this.user[field] = '';
  }

  openModal(){
    this.modal = true;
    this.toggleOverflowHtml();
  }

  closeModal(){
    this.modal = false;
    this.toggleOverflowHtml();
  }

  toggleOverflowHtml(){
    this.modal ? $('html').css('overflow', 'hidden') : $('html').css('overflow', 'auto');
  }
}
