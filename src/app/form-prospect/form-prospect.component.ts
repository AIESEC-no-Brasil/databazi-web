import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SignupService } from '../services/signup.service';
import { FormGroup, FormControl, Validators, FormBuilder, FormsModule, AbstractControl } from '@angular/forms';
import * as moment from 'moment';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { TranslateService } from '../../../node_modules/@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as $ from 'jquery';
import { AmplitudeService } from '../amplitude.service';

@Component({
  selector: 'app-form-prospect',
  templateUrl: './form-prospect.component.html',
  styleUrls: ['./form-prospect.component.scss']
})
export class FormProspectComponent implements OnInit {

  window: any = window;

  @Input() formedUser: any;
  @Output() onCancelEvent = new EventEmitter<boolean>();

  user = {
    fullname: '',
    cellphone: '',
    email: '',
    local_committee: { id: '' },
    program: '',
    duration: '',
    college_course: { id: '', name: '' },
    cellphone_contactable: true,
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_term: '',
    utm_content: ''
  };

  msgs: Message[] = [];

  filteredCourses: Observable<any[]>;
  filteredPlaces: Observable<any[]>;

  personalData: boolean = true;
  studyData: boolean = false;

  invalidEmail: boolean = false;
  invalidDate: boolean = false;
  invalidPhone: boolean = false;
  matchDate: boolean = true;
  loading: boolean = false;
  step1Form: FormGroup;
  step2Form: FormGroup;
  submittedPersonal: boolean = false;
  submittedStudy: boolean = false;
  completedSignup: boolean = false;

  embeddedForm: boolean = false;

  formToggle: boolean = false;
  courses: any;
  places: any;
  modal: any = false;

  myControl = new FormControl();
  signupSuccess: boolean = false;

  constructor(
    public signupService: SignupService,
    public translate: TranslateService,
    public router: Router,
    public urlScrapper: ActivatedRoute,
    public amplitude: AmplitudeService
  ) {
    this.step1Form = new FormGroup({
      fullname: new FormControl(
        this.user.fullname, [
        Validators.required
      ]),
      cellphone: new FormControl(this.user.cellphone, [
        Validators.required
      ]),
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.pattern(/^(([^*?<>().,;:\s@]+(\.[^*?<>().,;:\s@]+)*))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      ]),
      duration: new FormControl(this.user.duration, [
      ]),
      college_course_id: new FormControl(this.user.college_course, [
        Validators.required
      ]),
      local_committee_id: new FormControl(this.user.local_committee, [
        Validators.required
      ]),
      program: new FormControl(this.user.program, [
        Validators.required
      ])
    });
    this.detectKeypress();
  }

  detectKeypress() {
    $(document).keyup((event) => {
      if (this.modal && event.keyCode == 27) {
        this.closeModal();
      }
    })
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

    this.fillCourseSelect().then(() => {
      this.filteredCourses = this.courses;
    });
    this.fillPlacesSelect().then(() => {
      this.filteredPlaces = this.places;
    });
  }

  searchCourses(event) {
    this.filteredCourses = this._search(this.courses, event.query);
  };

  searchPlaces(event) {
    this.filteredPlaces = this._search(this.places, event.query);
  };

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

  cancelSignUp() {
    this.amplitude.trackingClickCancelGv();
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
    return this.emptyFields();
  }

  emptyFields() {
    return !(this.user.local_committee && !!this.user.local_committee.id) || !(this.user.fullname) || !(this.user.cellphone) || !(this.user.email) || this.invalidEmail || !(this.user.program);
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

  clearForm(formGroup: FormGroup) {
    let control: AbstractControl = null;
    formGroup.reset();
    formGroup.markAsUntouched();
    Object.keys(formGroup.controls).forEach((name) => {
      control = formGroup.controls[name];
      control.setErrors(null);
    });

    this.user = {
      fullname: '',
      cellphone: '',
      email: '',
      local_committee: { id: '' },
      program: '',
      duration: '', 
      college_course: { id: '', name: '' },
      cellphone_contactable: true,
      utm_source: '',
      utm_medium: '',
      utm_campaign: '',
      utm_term: '',
      utm_content: ''
    };
  };

  submit(el: string, resetForm: boolean) {

    let oldProgram = this.user.program,
    oldLocalCommittee = this.user.local_committee;

    this.submittedStudy = true;
    let property: any,
        method: any;
    switch (this.user.program) {
      case '0':
        method = 'addGvParticipant';
        property = 'gv_participant';
        break;
      case '1':
        method = 'addGtParticipant';
        property = 'gt_participant';
        break;
      case '2':
        method = 'addGpParticipant';
        property = 'gp_participant';
        break;
    }

    let user: any = {};
    user[property] = {
      fullname: this.user.fullname,
      cellphone: this.user.cellphone.replace(/[()_-]/g, ''),
      email: this.user.email,
      duration: this.user.duration,
      local_committee_id: +this.user.local_committee.id,
      college_course_id: (this.user.college_course.id == '' ? null : +this.user.college_course.id),
      cellphone_contactable: true,
      utm_source: (localStorage.getItem('utm_source') ? localStorage.getItem('utm_source') : null),
      utm_medium: (localStorage.getItem('utm_medium') ? localStorage.getItem('utm_medium') : null),
      utm_campaign: (localStorage.getItem('utm_campaign') ? localStorage.getItem('utm_campaign') : null),
      utm_term: (localStorage.getItem('utm_term') ? localStorage.getItem('utm_term') : null),
      utm_content: (localStorage.getItem('utm_content') ? localStorage.getItem('utm_content') : null)
    }

    this.loading = true;
    this.signupService[method](user, true)
      .then((res: any) => {
        this.loading = false;
        if (res.status == 'failure') {
          this.msgs = [];
          this.msgs.push({ severity: 'error', summary: 'FALHA AO SALVAR!', detail: 'Não foi possível salvar, tente novamente mais tarde.' });
        }

        else {
          switch(this.user.program){
            case '0':
              this.amplitude.trackingCompletedSignupGv();
              break;
            case '1':
              this.amplitude.trackingCompletedSignupGt();
              break;
            case '2':
              this.amplitude.trackingClickCancelGp();
              break;
          }

          localStorage.removeItem('utm_source');
          localStorage.removeItem('utm_medium');
          localStorage.removeItem('utm_campaign');
          localStorage.removeItem('utm_term');
          localStorage.removeItem('utm_content');

          this.clearForm(this.step1Form);
          this.showToast();

          if(resetForm){
            this.user.program = oldProgram;
            this.user.local_committee = oldLocalCommittee;
            document.getElementById(el).scrollIntoView();
          }else{
            this.completedSignup = true;
          }
        }

      },
        (err) => {
          this.msgs = [];
          this.msgs.push({ severity: 'error', summary: 'ERRO AO SALVAR!', detail: 'Não foi possível salvar, tente novamente mais tarde.' });
          this.loading = false;
        }
      )
  }

  showToast() {
    this.signupSuccess = true;
    setTimeout(() => {
      this.signupSuccess = false;
    }, 3000);
  };


  checkEmail() {
    this.signupService.checkValidEmail(this.user.email)
      .then((res: any) => {
        res.email_exists ? this.invalidEmail = true : this.invalidEmail = false;
      }, (err) => {
        this.msgs = [];
        this.msgs.push({ severity: 'error', summary: 'FALHA EM RECUPERAR DADOS!', detail: 'Não foi possível recuperar dados deste email.' });
      })
  }

  selectInput(element) {
    $('.form-group').css('z-index', '-1');
    $('.' + element).css('z-index', '10');
  }

  clearField(field) {
    this.user[field] = '';
  }

}
