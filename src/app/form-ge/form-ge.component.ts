import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SignupService } from '../services/signup.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import * as moment from 'moment';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { TranslateService } from '../../../node_modules/@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as $ from 'jquery';

import { FileValidatorDirective } from './../file-input-validator.directive';

@Component({
  selector: 'app-form-ge',
  templateUrl: './form-ge.component.html',
  styleUrls: ['./form-ge.component.scss']
})
export class FormGeComponent implements OnInit {

  @Input() formedUser: any;
  @Output() onCancelEvent = new EventEmitter<boolean>();

  user = {
    fullname: '',
    cellphone: '',
    email: '',
    birthdate: '',
    password: '',
    repassword: '',
    university: { id: '', name: '', local_committee_id: '' },
    college_course: { id: '', name: '' },
    cellphone_contactable: '',
    english_level: { id: '', name: '' },
    scholarity: 1,
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_term: '',
    utm_content: '',
    other_university: '',
    when_can_travel: '',
    preferred_destination: { id: '' },
    curriculum: '',
    city: { name: '' }
  }

  scholarityOptions: any = [
    { id: '0', name: 'Ensino Médio Completo' },
    { id: '2', name: 'Estudante de Graduação' },
    { id: '3', name: 'Mestrado ou Pós' },
    { id: '4', name: 'Graduado em até 1,5 anos' },
    { id: '5', name: 'Graduado há mais de 2 anos' },
    { id: '6', name: 'Outro' }
  ];

  englishLevelOptions: any = [
    { id: '1', name: 'Básico' },
    { id: '2', name: 'Intermediário' },
    { id: '3', name: 'Avançado' }
  ];

  cellphoneDefaultMask: string = '+00 000 000 0000';
  cellphoneLargerMask:string = '+00 0 000 000 0000';
  cellphoneMask : any;

  travelOptions = [
    { id: '0', name: 'Mais breve possível' },
    { id: '1', name: 'Proximos 3 meses' },
    { id: '2', name: 'Próximo 6 meses' },
    { id: '3', name: 'Em um ano' }
  ];

  preferredDestionationOptions: any = [
    { id: '0', name: 'Brazil' },
    { id: '1', name: 'Mexico' },
    { id: '2', name: 'Peru' }
  ]

  // list of cities - TODO: endpoint with all cities
  citiesOptions: any = [
    { name: "CABA" },
    { name: "Bahía Blanca" },
    { name: "Bariloche" },
    { name: "Catamarca" },
    { name: "Cipolletti" },
    { name: "Comodoro Rivadavia" },
    { name: "Córdoba" },
    { name: "Corrientes" },
    { name: "Formosa" },
    { name: "Gran Buenos Aires Oeste" },
    { name: "Jujuy" },
    { name: "La Plata" },
    { name: "La Rioja" },
    { name: "Lomas de Zamora" },
    { name: "Mar del Plata" },
    { name: "Mendoza" },
    { name: "Neuquén" },
    { name: "Parana" },
    { name: "Posadas" },
    { name: "Resistencia" },
    { name: "Rio Cuarto" },
    { name: "Rio Gallegos" },
    { name: "Rosario" },
    { name: "Salta" },
    { name: "San Juan" },
    { name: "San Luis" },
    { name: "Santa Fe" },
    { name: "Santa Rosa (La Pampa)" },
    { name: "Santiago del Estero" },
    { name: "Trelew" },
    { name: "Tucumán" },
    { name: "Ushuaia" },
    { name: "Viedma" },
    { name: "Otras ciudades" }
  ]

  universities: any = [];

  filteredScholarityOptions: Observable<any[]>;
  filteredCourses: Observable<any[]>;
  filteredEnglishLevelOptions: Observable<any[]>;
  filteredCitiesOptions: Observable<any[]>;
  filteredPlaces: Observable<any[]>;
  filteredPreferredDestinationsOptions: Observable<any[]>;
  showOtherUniversityField: boolean = false;

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
    public urlScrapper: ActivatedRoute/*,
    public formOfflineComponent: FormOfflineComponent*/
  ) {
    this.step1Form = new FormGroup({
      fullname: new FormControl(this.user.fullname, [
        Validators.required
      ]),
      cellphone: new FormControl(this.user.cellphone, [
        Validators.required
      ]),
      email: new FormControl(this.user.email, [
        Validators.required
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
      ])
    });
    this.step2Form = new FormGroup({
      university_id: new FormControl(this.user.university, [
        Validators.required
      ]),
      city: new FormControl(this.user.city, [
        Validators.required
      ]),
      college_course_id: new FormControl(this.user.college_course, [
        Validators.required
      ]),
      english_level: new FormControl(this.user.english_level, [
        Validators.required
      ]),
      /*scholarity: new FormControl(this.user.scholarity, [
        Validators.required
      ]),*/
      other_university: new FormControl(this.user.other_university, [
        Validators.required
      ]),
      when_can_travel: new FormControl(this.user.when_can_travel, [
        Validators.required
      ]),
      cellphone_contactable: new FormControl(this.user.cellphone_contactable, []),
      preferred_destination: new FormControl(this.user.preferred_destination, [
        Validators.required
      ]),
      curriculum: new FormControl(this.user.curriculum, [
         FileValidatorDirective.validate
      ])
    });
    window.innerWidth > 600 ? this.placeholderBirthdate = "Os programas da AIESEC são para pessoas de 18 à 30 anos" : this.placeholderBirthdate = "Data de Nascimento";
  }

  ngOnInit() {


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

    this.filteredScholarityOptions = this.scholarityOptions;
    this.filteredCitiesOptions = this.citiesOptions;

    this.fillCourseSelect().then(() => {
      this.filteredCourses = this.courses;
    });

    this.fillPlacesSelect().then(() => {
      this.filteredPlaces = this.places;
    });

    this.filteredEnglishLevelOptions = this.englishLevelOptions;

    this.filteredPreferredDestinationsOptions = this.preferredDestionationOptions;
  }

  onResize(event) {
    (event.target.innerWidth > 600 ? this.placeholderBirthdate = "Os programas da AIESEC são para pessoas de 18 à 30 anos" : this.placeholderBirthdate = "Data de nascimento");
  }

  cancelSignUp() {
    if (this.formedUser) {
      this.onCancelEvent.emit();
    } else {
      if (this.submittedPersonal) {
        this.submittedPersonal = false;
        this.submittedStudy = false;
        this.personalData = true;
        this.studyData = false;
      } else {
        this.router.navigate(['/']);
      }
    }
  }

  filterUniversities(city) {
    if (city)
      this.fillUniversitySelect();
  }

  accessAiesec() {
    window.open("https://aiesec.org/", "_blank");
  }

  isValidPersonal(field) {
    return !this.step1Form.controls[field].valid && (this.step1Form.controls[field].dirty || this.submittedPersonal)
  }

  isValidStudy(field) {
    return !this.step2Form.controls[field].valid && (this.step2Form.controls[field].dirty || this.submittedStudy)
  }

  // fillCitiesSelect(search?) {
  //   return this.signupService.getCities(search).then((res: any) => {
  //     this.citiesOptions = res;
  //   }, (err) => {
  //     this.msgs = [];
  //     this.msgs.push({ severity: 'error', summary: 'FALHA EM RECUPERAR DADOS!', detail: 'Não foi possível recuperar os dados das cidades disponíveis.' });
  //   })
  // }

  fillUniversitySelect(search?) {
    return this.signupService.getUniversities(search, this.user.city.name).then((res: any) => {
      this.universities = res;
      _.forEach(this.universities, (university) => {
        if (_.includes(university.name.split(' '), "Otras")) {
          university.other_university = true;
        }
      });
      this.universities = this._search(this.universities, search);
    }, (err) => {
      this.msgs = [];
      this.msgs.push({ severity: 'error', summary: 'FALHA EM RECUPERAR DADOS!', detail: 'Não foi possível recuperar os dados das faculdades disponíveis.' });
    })
  }

  checkUniversity(university){
    if (university.other_university || (this.user.city.name == 'Otras ciudades' && this.user.university)){
      this.showOtherUniversityField = true;
    }
    else {
      this.showOtherUniversityField = false;
    }
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

  changeScholarity(scholarity_level) {
    if (+scholarity_level <= 2 || +scholarity_level == 6) {
      this.user.university = { id: '', name: '', local_committee_id: '' };
      this.user.college_course = { id: '', name: '' };
    }
  }

  unableToSubmit() {
    return this.emptyFields() || this.emptyUniversity() || this.emptyCourse() || !this.user.when_can_travel || !this.user.preferred_destination.id;
  }

  emptyFields() {
    //return !(this.user.scholarity && !!this.user.scholarity.id) || !(this.user.english_level && !!this.user.english_level.id) || !(this.user.spanish_level && !!this.user.spanish_level.id);
    return !(this.user.english_level && !!this.user.english_level.id);
  }

  emptyUniversity() {
    if (this.user.university && this.user.university.id) {
      return !this.user.university.id
    } else {
      return true;
    }
    /*if ((+this.user.scholarity.id >= 2 && +this.user.scholarity.id <= 5)) {
      if(this.user.university && this.user.university.id){
        return !this.user.university.id
      }else{
        return true;
      }
    }
    else {
      return false;
    }*/
  }

  emptyCourse() {
    if (this.user.college_course.id) {
      return !this.user.college_course.id
    } else {
      return true;
    }
    /*if ((+this.user.scholarity.id >= 2 && +this.user.scholarity.id <= 5)) {
      if(this.user.college_course.id){
        return !this.user.college_course.id
      }else{
        return true;
      }
    }
    else {
      return false;
    }*/
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
  }

  closeModal() {
    this.modal = false;
  }

  checkPhone() {
    let cellphone = this.user.cellphone.replace(/[(+)_-\s]/g, '');
    if (cellphone.length <= 11) {
      this.invalidPhone = true;
      return;
    }
    else {
      this.invalidPhone = false;
    }
  }

  registerUser() {
    this.submittedPersonal = true;
    if (this.user.password != this.user.repassword) {
      this.invalidPassword = true;
    }
    else {
      this.invalidPassword = false;
    }

    if (this.user.fullname && this.user.cellphone && this.user.email && this.user.birthdate && !this.invalidPassword && !this.invalidPhone && this.matchDate && !this.isValidPersonal('password')) {
      this.personalData = false;
      this.studyData = true;
    }
  }

  checkUniversityField() {
    if (!this.showOtherUniversityField) {
      this.user.other_university = '';
      return false;
    }
    else if (this.showOtherUniversityField && !this.user.other_university) {
      return true;
    }
  }

  submit() {
    this.submittedStudy = true;
    if (this.checkUniversityField()) {
      return;
    };
    let user = {
      ge_participant: {
        fullname: this.user.fullname,
        cellphone: this.user.cellphone.replace(/[(+)_-\s]/g, ''),
        email: this.user.email,
        password: this.user.password,
        birthdate: moment(this.user.birthdate, 'DDMMYYYY').format('DD/MM/YYYY'),
        local_committee_id: +this.user.university.local_committee_id,
        university_id: (this.user.university.id == '' ? null : +this.user.university.id),
        college_course_id: (this.user.college_course.id == '' ? null : +this.user.college_course.id),
        cellphone_contactable: (this.user.cellphone_contactable ? true : false),
        scholarity: 1, //+this.user.scholarity.id,
        english_level: +this.user.english_level.id,
        utm_source: (localStorage.getItem('utm_source') ? localStorage.getItem('utm_source') : null),
        utm_medium: (localStorage.getItem('utm_medium') ? localStorage.getItem('utm_medium') : null),
        utm_campaign: (localStorage.getItem('utm_campaign') ? localStorage.getItem('utm_campaign') : null),
        utm_term: (localStorage.getItem('utm_term') ? localStorage.getItem('utm_term') : null),
        utm_content: (localStorage.getItem('utm_content') ? localStorage.getItem('utm_content') : null),
        when_can_travel: +this.user.when_can_travel,
        preferred_destination: +this.user.preferred_destination.id,
        other_university: this.user.other_university ? this.user.other_university : null,
      }
    };

    if (this.step2Form.get('curriculum').value) {
      user.ge_participant['curriculum'] = this.step2Form.get('curriculum').value;
    }
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
          this.router.navigate(['/empreendedor-global/obrigado']);
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

  onFileChange(event) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.step2Form.get('curriculum').setValue(file);
      };
    }
  }

  searchScholarity(event) {
    this.filteredScholarityOptions = this._search(this.scholarityOptions, event.query);
  };

  searchUnivesity(event) {
    if (!event.originalEvent) {
      this.universities = this.universities.slice(); //fixing autocomplete first load that wasn't showing the suggestions
      return;
    }
    this.fillUniversitySelect(event.query);
  };

  checkUniversityValue(event){
    if (event.keyCode == 8 && !this.user.university) {
      this.fillUniversitySelect('');
    }
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

  searchPreferredDestinations(event) {
    this.filteredPreferredDestinationsOptions = this._search(this.preferredDestionationOptions, event.query);
  };

  searchCities(event) {
    if (!event.originalEvent){
      this.filteredCitiesOptions = this.citiesOptions;
    }
    this.filteredCitiesOptions = this._search(this.citiesOptions, event.query);
  }

  checkCityValue(){
    if (this.user.city){
      this.user.other_university = null;
      this.user.university = null;
    }
  }

  checkMaskCellphone(event) {
    if (+event.key >= 0 && +event.key <= 9 || event.key == "Backspace") {
      if (this.user.cellphone.replace(/[()_+-\s]/g, '').length < 12) {
        this.cellphoneMask = this.cellphoneDefaultMask;
      }
      else {
        this.cellphoneMask = this.cellphoneLargerMask;
      }
    }
  }
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
    if (field == 'city'){
      this.user.university = null;
      this.user.other_university = null;
      this.filteredCitiesOptions = this.citiesOptions;
    }
    else if (field == 'university'){
      this.user.other_university = null;
      this.fillUniversitySelect();
    }
  }
}
