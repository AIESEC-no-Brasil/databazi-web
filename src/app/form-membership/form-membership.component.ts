import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SignupService } from '../services/signup.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import * as moment from 'moment';
import { Message } from 'primeng/components/common/api';
import { TranslateService } from '../../../node_modules/@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import * as $ from 'jquery';

import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AmplitudeService } from '../amplitude.service';

@Component({
  selector: 'app-form-membership',
  templateUrl: './form-membership.component.html',
  styleUrls: ['./form-membership.component.scss']
})

export class FormMembershipComponent implements OnInit {

  window: any = window;

  @Input() formedUser: any;
  @Output() onCancelEvent = new EventEmitter<boolean>();

  user = {
    fullname: '',
    cellphone: '',
    birthdate: '',
    email: '',
    local_committee: { id: '' },
    college_course: { id: '', name: '' },
    city: '',
    state: { value: '', name: '' },
    cellphone_contactable: true,
  };


  states = [
    {"name": "Acre", "value": "AC"},
    {"name": "Alagoas", "value": "AL"},
    {"name": "Amapá", "value": "AP"},
    {"name": "Amazonas", "value": "AM"},
    {"name": "Bahia", "value": "BA"},
    {"name": "Ceará", "value": "CE"},
    {"name": "Distrito Federal", "value": "DF"},
    {"name": "Espírito Santo", "value": "ES"},
    {"name": "Goiás", "value": "GO"},
    {"name": "Maranhão", "value": "MA"},
    {"name": "Mato Grosso", "value": "MT"},
    {"name": "Mato Grosso do Sul", "value": "MS"},
    {"name": "Minas Gerais", "value": "MG"},
    {"name": "Pará", "value": "PA"},
    {"name": "Paraíba", "value": "PB"},
    {"name": "Paraná", "value": "PR"},
    {"name": "Pernambuco", "value": "PE"},
    {"name": "Piauí", "value": "PI"},
    {"name": "Rio de Janeiro", "value": "RJ"},
    {"name": "Rio Grande do Norte", "value": "RN"},
    {"name": "Rio Grande do Sul", "value": "RS"},
    {"name": "Rondônia", "value": "RO"},
    {"name": "Roraima", "value": "RR"},
    {"name": "Santa Catarina", "value": "SC"},
    {"name": "São Paulo", "value": "SP"},
    {"name": "Sergipe", "value": "SE"},
    {"name": "Tocantins", "value": "TO"}
  ];

  filteredCourses: any;
  filteredPlaces: any;
  filteredStates: any;

  placeholderBirthdate: string;

  msgs: Message[] = [];

  invalidDate: boolean = false;
  invalidPhone: boolean = false;
  invalidState : boolean = false;
  invalidCollegeCourse : boolean = false;
  invalidPlace : boolean = false;
  matchDate: boolean = true;
  loading: boolean = false;
  form: FormGroup;
  completedSignup: boolean = false;
  modal: boolean = false;
  embeddedForm: boolean = false;

  courses: any;
  places: any;

  submitted: boolean = false;

  constructor(
    public signupService: SignupService,
    public translate: TranslateService,
    public router: Router,
    public urlScrapper: ActivatedRoute,
    public amplitude: AmplitudeService
  ) {
    this.form = new FormGroup({
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
      city: new FormControl(this.user.city, [
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
      ]),
      birthdate: new FormControl(this.user.birthdate, [
        Validators.required
      ]),
      college_course_id: new FormControl(this.user.college_course, [
        Validators.required
      ])
    });
    window.innerWidth > 600 ? this.placeholderBirthdate = "Os programas da AIESEC são para pessoas de 18 à 30 anos" : this.placeholderBirthdate = "Data de Nascimento";
    this.detectKeypress();
  }

  detectKeypress() {
    $(document).keyup((event) => {
      if (this.modal && event.keyCode == 27) {
        this.closeModal()
      }
    })
  }

  ngOnInit() {

    if (this.formedUser) {
      this.user = this.formedUser;
    }

    this.fillCourseSelect().then(() => {
      this.filteredCourses = this.form.controls.college_course_id.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter(value, this.courses))
        );
    });

    this.fillPlacesSelect().then(() => {
      this.filteredPlaces = this.form.controls.local_committee_id.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter(value, this.places))
        );
    });

    this.filteredStates = this.form.controls.state.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter(value, this.states))
        );
  }

  private _filter(value: string, options: any): any[] {
    const filterValue = value.length ? value.toLowerCase() : value;
    return options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  onResize(event) {
    (event.target.innerWidth > 600 ? this.placeholderBirthdate = "Os programas da AIESEC são para pessoas de 18 à 30 anos" : this.placeholderBirthdate = "Data de nascimento");
  }

  accessAiesec() {
    window.open("https://aiesec.org/", "_blank");
  }

  isValid(field) {
    return !this.form.controls[field].valid && (this.form.controls[field].dirty || this.submitted)
  }

  fillCourseSelect() {
    return this.signupService.getCourses().then((res: any) => {
      let orderedList = _.orderBy(res, ['name'], ['asc']);
      let other = _.remove(orderedList, item => item.name === 'Outro');
      this.courses = _.union(orderedList, other);
    }, (err) => {
      this.msgs = [];
      this.msgs.push({ severity: 'error', summary: 'FALHA EM RECUPERAR DADOS!', detail: 'Não foi possível recuperar os dados dos cursos disponíveis.' });
    })
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
    return this.emptyFields() || this.invalidFields()
  }

  emptyFields() {
    return !(this.user.local_committee && !!this.user.local_committee.id) || !this.user.fullname || !this.user.cellphone || !this.user.birthdate || !this.user.email || !this.user.college_course.id || !this.user.city || (!this.user.state.value && !this.user.state.name) ;
  }

  invalidFields(){
    return this.invalidCollegeCourse || this.invalidState || this.invalidPlace
  }

  checkDate() {
    let date = moment(this.user.birthdate, 'DDMMYYYY').format('DD/MM/YYYY').split('/');
    if ((+date[0] > 0 && +date[0] <= 31) && (+date[1] > 0 && +date[1] <= 12) && (+date[2] > 1900 && +date[2] < moment().year())) {
      this.invalidDate = false;
      let date = moment(this.user.birthdate, 'DD/MM/YYYY').format('YYYY-MM-DD');
      let age = moment().diff(date, 'years', false);
      (age >= 18 && age <= 30) ? this.matchDate = true : this.matchDate = false
    }
    else {
      this.invalidDate = true;
    }
  }

  openModal() {
    this.modal = true;
    this.toggleOverflowHtml();
  }

  closeModal() {
    this.modal = false;
    this.toggleOverflowHtml();
  }

  toggleOverflowHtml() {
    this.modal ? $('html').css('overflow', 'hidden') : $('html').css('overflow', 'auto');
  }

  checkPhone() {
    let cellphone = this.user.cellphone.replace(/[()_-]/g, '');

    if (cellphone.length < 10) {
      this.invalidPhone = true;
      return;
    }
    else {
      this.invalidPhone = false;
    }
  }

  submit(el: HTMLElement) {
    this.amplitude.trackingCompletedSignupMembership();
    this.submitted = true;

    let user = {
      fullname: this.user.fullname,
      cellphone: this.user.cellphone.replace(/[()_-]/g, ''),
      birthdate: moment(this.user.birthdate, 'DDMMYYYY').format('DD/MM/YYYY'),
      email: this.user.email,
      local_committee_id: +this.user.local_committee.id,
      college_course_id: +this.user.college_course.id,
      cellphone_contactable: this.user.cellphone_contactable,
      city: this.user.city,
      state: this.user.state.value
    };
    this.loading = true;

    this.signupService.addMembership(user)
      .then((res: any) => {
        this.loading = false;
        if (res.status == 'failure') {
          this.msgs = [];
          this.msgs.push({ severity: 'error', summary: 'FALHA AO SALVAR!', detail: 'Não foi possível salvar, tente novamente mais tarde.' });
        }
        else {
          this.completedSignup = true;
          el.scrollIntoView();
          this.window.ga('set', 'page', '/membresia/obrigado');
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

  display(option) {
    return option ? option.name : undefined;
  }

  searchCourses(event) {
    this.filteredCourses = this._search(this.courses, event.query);
  };

  searchStates(event) {
    this.filteredStates = this._search(this.states, event.query);
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
    $('.form-priority').css('z-index', '1');
    $('.' + element).css('z-index', '10');
  }

  validateSelectedItem(filter, data) {
    if (!this.user[data]){
      return ;
    }

    if (_.find(this[filter], (option) => { option.name == this.user[data] }) || this[filter].length == 1) {
      this.user[data] = this[filter][0];
      this.validateOrInvalidateValues(data, false);
    }
    else if (!_.find(this[filter], (option) => { option.name == this.user[data]  }) || this[filter].length == 0) {
      this.validateOrInvalidateValues(data, true) ;
    }
  }

  validateOrInvalidateValues(context: string, invalid: boolean) {
    invalid ? this.clearField(context) : false;
    switch (context) {
      case 'state':
        this.invalidState = invalid;
        break;
      case 'college_course':
        this.invalidCollegeCourse = invalid;
        break;
      case 'local_committee':
        this.invalidPlace = invalid;
    }
  }

  selectItem(context){
    this.validateOrInvalidateValues(context, false); 
  }

  clearField(field) {
    this.user[field] = '';
  }
}
