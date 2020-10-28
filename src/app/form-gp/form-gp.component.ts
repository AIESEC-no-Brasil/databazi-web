import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SignupService } from '../services/signup.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import * as moment from 'moment';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import * as $ from 'jquery';

import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AmplitudeService } from '../amplitude.service';

@Component({
  selector: 'app-form-gp',
  templateUrl: './form-gp.component.html',
  styleUrls: ['./form-gp.component.scss']
})
export class FormGpComponent implements OnInit {

  window: any = window;

  @Input() formedUser: any;
  @Output() onCancelEvent = new EventEmitter<boolean>();

  user = {
    fullname: '',
    cellphone: '',
    email: '',
    birthdate: '',
    password: '',
    repassword: '',
    local_committee: { id: '' },
    college_course: { id: '', name: '' },
    cellphone_contactable: true,
    english_level: { id: '' },
    program_duration: 0,
    work_experience_id: 0,
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_term: '',
    utm_content: ''
  }

  englishLevelOptions: any = [
    { id: '0', name: 'Não tenho' },
    { id: '1', name: 'Básico' },
    { id: '2', name: 'Intermediário' },
    { id: '3', name: 'Avançado' },
    { id: '4', name: 'Fluente' }
  ];

  educationalExperienceItems: any = [
    { id: '0', name: 'Não tenho' },
    { id: '1', name: 'Sim, menos de 1 ano na área' },
    { id: '2', name: 'Sim, mais de 1 ano na área' },
  ];

  filteredCourses: Observable<any[]>;
  filteredEnglishLevelOptions: Observable<any[]>;
  filteredPlaces: Observable<any[]>;

  placeholderBirthdate: string;

  selectedItems: any = {
    language: false,
    marketing: false,
    information_technology: false,
    management: false
  };

  msgs: Message[] = [];

  personalData: boolean = true;
  studyData: boolean = false;

  invalidEmail: boolean = false;
  invalidPassword: boolean = false;
  invalidDate: boolean = false;
  invalidPhone: boolean = false;
  matchDate: boolean = true;
  loading: boolean = false;
  step1Form: FormGroup;
  step2Form: FormGroup;
  submittedPersonal: boolean = false;
  submittedStudy: boolean = false;
  completedSignup: boolean = false;
  modal: boolean = false;
  embeddedForm: boolean = false;

  courses: any;
  places: any;

  constructor(
    public signupService: SignupService,
    public translate: TranslateService,
    public router: Router,
    public urlScrapper: ActivatedRoute,
    public amplitude: AmplitudeService
  ) {
    this.step1Form = new FormGroup({
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
      birthdate: new FormControl(this.user.birthdate, [
        Validators.required
      ]),
      password: new FormControl(this.user.password, [
        Validators.required,
        Validators.pattern('^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z]).{8,}$')
      ]),
      repassword: new FormControl(this.user.repassword, [
        Validators.required,
        Validators.pattern('^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z]).{8,}$')
      ]),
      college_course_id: new FormControl(this.user.college_course, [
        Validators.required
      ]),
      local_committee_id: new FormControl(this.user.local_committee, [
        Validators.required
      ]),
      english_level: new FormControl(this.user.english_level, [
        Validators.required
      ]),
      program_duration: new FormControl(this.user.program_duration),
      work_experience_id: new FormControl(this.user.work_experience_id),
      cellphone_contactable: new FormControl(this.user.cellphone_contactable, [])
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
    console.log('entrou')
    if (this.formedUser) {
      this.user = this.formedUser;
      this.personalData = false;
      this.studyData = true;
    }

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

      if (param['embedded']) {
        this.embeddedForm = true;
      }
    });

    this.fillCourseSelect().then(() => {
      this.filteredCourses = this.step1Form.controls.college_course_id.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter(value, this.courses))
        );
    });

    this.filteredEnglishLevelOptions = this.step1Form.controls.english_level.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value, this.englishLevelOptions))
      );

    this.fillPlacesSelect().then(() => {
      this.filteredPlaces = this.step1Form.controls.local_committee_id.valueChanges
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

  onResize(event) {
    (event.target.innerWidth > 600 ? this.placeholderBirthdate = "Os programas da AIESEC são para pessoas de 18 à 30 anos" : this.placeholderBirthdate = "Data de nascimento");
  }


  cancelSignUp(el: HTMLElement) {
    this.amplitude.trackingClickCancelGt();
    if (this.formedUser) {
      this.onCancelEvent.emit();
    } else {
      if (this.submittedPersonal) {
        this.submittedPersonal = false;
        this.submittedStudy = false;
        this.personalData = true;
        this.studyData = false;
        el.scrollIntoView();
      } else {
        this.router.navigate(['/']);
      }
    }
  }

  accessAiesec() {
    window.open("https://aiesec.org/", "_blank");
  }

  isValidPersonal(field) {
    return !this.step1Form.controls[field].valid && (this.step1Form.controls[field].dirty || this.submittedPersonal)
  }

  isValidStudy(field) {
    return !this.step1Form.controls[field].valid && (this.step1Form.controls[field].dirty || this.submittedStudy)
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
    return this.emptyFields() || this.emptyCourse();
  }

  emptyFields() {
    return !(this.user.english_level && !!this.user.english_level.id) || !(this.user.local_committee && !!this.user.local_committee.id);
  }

  emptyCourse() {
    if (this.user.college_course.id) {
      return !this.user.college_course.id
    } else {
      return true;
    }
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

  checkPassword() {
    if (this.user.repassword && this.user.password != this.user.repassword) {
      this.invalidPassword = true;
    }
    else {
      this.invalidPassword = false;
    }
  };

  registerUser(el: HTMLElement) {
    this.submittedPersonal = true;
    this.checkPassword();
    if (this.user.fullname && this.user.cellphone && this.user.email && this.user.birthdate && !this.invalidPassword && !this.invalidPhone && this.matchDate && !this.isValidPersonal('password')) {
      this.personalData = false;
      this.studyData = true;
      el.scrollIntoView();
    }
  }

  submit(el: HTMLElement) {
    this.submittedStudy = true;
    this.amplitude.trackingCompletedSignupGt();

    let user = {
      gt_participant: {
        fullname: this.user.fullname,
        cellphone: this.user.cellphone.replace(/[()_-]/g, ''),
        email: this.user.email,
        password: this.user.password,
        birthdate: moment(this.user.birthdate, 'DDMMYYYY').format('DD/MM/YYYY'),
        local_committee_id: +this.user.local_committee.id,
        college_course_id: (this.user.college_course.id == '' ? null : +this.user.college_course.id),
        cellphone_contactable: (this.user.cellphone_contactable ? true : false),
        english_level: +this.user.english_level.id,
        program_duration: +this.user.program_duration,
        work_experience: +this.user.work_experience_id,
        utm_source: (localStorage.getItem('utm_source') ? localStorage.getItem('utm_source') : null),
        utm_medium: (localStorage.getItem('utm_medium') ? localStorage.getItem('utm_medium') : null),
        utm_campaign: (localStorage.getItem('utm_campaign') ? localStorage.getItem('utm_campaign') : null),
        utm_term: (localStorage.getItem('utm_term') ? localStorage.getItem('utm_term') : null),
        utm_content: (localStorage.getItem('utm_content') ? localStorage.getItem('utm_content') : null)
      }
    };
    this.loading = true;
    this.signupService.addGeParticipant(user)
      .then((res: any) => {
        this.loading = false;
        if (res.status == 'failure') {
          this.msgs = [];
          this.msgs.push({ severity: 'error', summary: 'FALHA AO SALVAR!', detail: 'Não foi possível salvar, tente novamente mais tarde.' });
        }
        else {
          this.completedSignup = true;
          localStorage.removeItem('utm_source');
          localStorage.removeItem('utm_medium');
          localStorage.removeItem('utm_campaign');
          localStorage.removeItem('utm_term');
          localStorage.removeItem('utm_content');
          el.scrollIntoView();
          this.router.navigate(['/talento-global/obrigado']);
        }
      },
        (err) => {
          this.msgs = [];
          this.msgs.push({ severity: 'error', summary: 'ERRO AO SALVAR!', detail: 'Não foi possível salvar, tente novamente mais tarde.' });
          this.loading = false;
        }
      )
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

  display(option) {
    return option ? option.name : undefined;
  }

  searchCourses(event) {
    this.filteredCourses = this._search(this.courses, event.query);
  };

  searchPlaces(event) {
    this.filteredPlaces = this._search(this.places, event.query);
  };

  searchEnglishLevels(event) {
    this.filteredEnglishLevelOptions = this._search(this.englishLevelOptions, event.query);
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
