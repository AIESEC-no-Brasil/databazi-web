import { Component, OnInit } from '@angular/core';
import { SignupService } from '../services/signup.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import * as moment from 'moment';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { TranslateService } from '../../../node_modules/@ngx-translate/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-form-gt',
  templateUrl: './form-gt.component.html',
  styleUrls: ['./form-gt.component.scss']
})
export class FormGtComponent implements OnInit {

  user = {
    fullname: '',
    cellphone: '',
    email: '',
    birthdate: '',
    password: '',
    repassword: '',
    local_committee_id: '',
    university_id: '',
    college_course_id: '',
    cellphone_contactable: '', 
    english_level: '',
    scholarity: '',
    experience: []
  }

  experienceItems = [
    { name: 'Ensino de Línguas', value: 'language'},
    { name: 'Marketing', value: 'marketing'},
    { name: 'Tecnologia da Informação', value: 'information_technology'},
    { name: 'Gestão', value: 'management'},
  ]

  selectedItems : any = {
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
  hasExperience:boolean = false;
  completedSignup: boolean = false;

  universities: any;
  courses: any;
  places: any;

  constructor(
    public signupService: SignupService,
    public translate: TranslateService,
    public router: Router
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
      university_id: new FormControl(this.user.university_id, [
        Validators.required
      ]),
      college_course_id: new FormControl(this.user.college_course_id, [
        Validators.required
      ]),
      local_committee_id: new FormControl(this.user.local_committee_id, [
        Validators.required
      ]),
      english_level: new FormControl(this.user.english_level, [
        Validators.required
      ]),
      scholarity: new FormControl(this.user.scholarity, [
        Validators.required
      ]),
      cellphone_contactable: new FormControl(this.user.cellphone_contactable, []),
    })
  }

  ngOnInit() {
    this.fillUniversitySelect();
    this.fillCourseSelect();
    this.fillPlacesSelect();
  }

  addOrRemove(experience){
    (this.selectedItems[experience.value]) ? this.selectedItems[experience.value] = false : this.selectedItems[experience.value] = true;
    (_.find(this.selectedItems, (element) => {return element == true})) ? this.hasExperience = true : this.hasExperience = false;
  }

  cancelSignUp(){
    this.router.navigate(['/landing-page']);
  }

  accessAiesec(){
    window.open("https://aiesec.org/", "_blank");
  }

  isValidPersonal(field) {
    return !this.step1Form.controls[field].valid && (this.step1Form.controls[field].dirty || this.submittedPersonal)
  }

  isValidStudy(field) {
    return !this.step2Form.controls[field].valid && (this.step2Form.controls[field].dirty || this.submittedStudy)
  }

  fillUniversitySelect() {
    this.signupService.getUniversities().then((res: any) => {
      this.universities = res;
    }, (err) => {
      this.msgs = [];
      this.msgs.push({ severity: 'error', summary: 'FALHA EM RECUPERAR DADOS!', detail: 'Não foi possível recuperar os dados das faculdades disponíveis.' });
    })
  }

  fillCourseSelect() {
    this.signupService.getCourses().then((res: any) => {
      this.courses = res;
    }, (err) => {
      this.msgs = [];
      this.msgs.push({ severity: 'error', summary: 'FALHA EM RECUPERAR DADOS!', detail: 'Não foi possível recuperar os dados dos cursos disponíveis.' });
    })
  }

  fillPlacesSelect() {
    this.signupService.getLocalCommittees().then((res: any) => {
      this.places = res;
    }, (err) => {
      this.msgs = [];
      this.msgs.push({ severity: 'error', summary: 'FALHA EM RECUPERAR DADOS!', detail: 'Não foi possível recuperar os dados das AIESEC disponíveis.' });
    })
  }

  checkDate() {
    let date = this.user.birthdate.split('/');
    if ((+date[0] > 0 && +date[0] <= 31) && (+date[1] > 0 && +date[1] <= 12) && (+date[2] > 1900 && +date[2] < moment().year())) {
      this.invalidDate = false;
      this.matchDate = (moment(+date[2]).isBetween((moment().year() - 30), moment().year() - 18))
    }
    else {
      this.invalidDate = true;
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

    let cellphone = this.user.cellphone.replace(/[()_-]/g, '');

    if (cellphone.length < 10){
      this.invalidPhone = true;
    }
    else {
      this.invalidPhone = false;
    }  

    if (this.user.fullname && this.user.cellphone && this.user.email && this.user.birthdate && !this.invalidPassword && this.matchDate && !this.isValidPersonal('password')) {
      this.personalData = false;
      this.studyData = true;
    }
  }

  submit() {
    this.submittedStudy = true;

    let user = {
      gt_participant: {
        fullname: this.user.fullname,
        cellphone: this.user.cellphone.replace(/[()_-]/g, ''),
        email: this.user.email,
        password: this.user.password,
        birthdate: moment(this.user.birthdate).format('YYYY-MM-DD'),
        local_committee_id: +this.user.local_committee_id,
        university_id: +this.user.university_id,
        college_course_id: +this.user.college_course_id,
        cellphone_contactable: (this.user.cellphone_contactable ? true : false),
        english_level: +this.user.english_level,
        scholarity: +this.user.scholarity,
        experience: this.selectedItems
      }
    };
    this.loading = true;
    this.signupService.addGtParticipant(user)
      .then((res: any) => {
        this.loading = false;
        if (res.status == 'failure') {
          this.msgs = [];
          this.msgs.push({ severity: 'error', summary: 'FALHA AO SALVAR!', detail: 'Não foi possível salvar, tente novamente mais tarde.' });
        }
        else {
          this.completedSignup = true;
        }
      },
        (err) => {
          this.msgs = [];
          this.msgs.push({ severity: 'error', summary: 'ERRO AO SALVAR!', detail: 'Não foi possível salvar, tente novamente mais tarde.' });
          this.loading = false;
        }
      )
  }

  phoneMask() {
    return {
      mask: (value) => {
        if (value.replace(/[./_-]/g, '').length <= 12) {
          return ['(', /\d/, /\d/, ')', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        }
        else {
          return ['(', /\d/, /\d/, ')', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        }
      },
      guide: true
    };
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


}
