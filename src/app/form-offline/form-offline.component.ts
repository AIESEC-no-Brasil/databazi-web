import { Component, OnInit } from '@angular/core';
import { SignupService } from '../services/signup.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import * as moment from 'moment';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { TranslateService } from '../../../node_modules/@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-offline',
  templateUrl: './form-offline.component.html',
  styleUrls: ['./form-offline.component.scss']
})
export class FormOfflineComponent implements OnInit {

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
    scholarity: '',
    program: ''
  }

  msgs: Message[] = [];

  placeholderBirthdate: string;

  personalData: boolean = true;
  studyData: boolean = false;
  showGVStep: boolean = false;
  showGTStep: boolean = false;
  showGEStep: boolean = false;

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

  formToggle : boolean = false;
  universities: any;
  courses: any;
  places: any;

  constructor(
    public signupService: SignupService,
    public translate: TranslateService,
    public urlScrapper: ActivatedRoute,
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
      ]),
      program: new FormControl(this.user.program, [
      	Validators.required
      ]),
      cellphone_contactable: new FormControl(this.user.cellphone_contactable, [])
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
      scholarity: new FormControl(this.user.scholarity, [
        Validators.required
      ]),
    });
    window.innerWidth > 600 ? this.placeholderBirthdate = "Os programas da AIESEC são para pessoas de 18 à 30 anos" : this.placeholderBirthdate = "Data de Nascimento";
  }

  ngOnInit() {

    this.urlScrapper.queryParams.subscribe((param: any) => {
      if (param['source']) {
        localStorage.setItem('source', param['source'])
      }

      if (param['medium']) {
        localStorage.setItem('medium', param['medium'])
      }

      if (param['campaign']) {
        localStorage.setItem('campaign', param['campaign'])
      }
    });

    this.fillUniversitySelect();
    this.fillCourseSelect();
    this.fillPlacesSelect();
  }

  onResize(event){
    (event.target.innerWidth > 600 ? this.placeholderBirthdate = "Os programas da AIESEC são para pessoas de 18 à 30 anos" : this.placeholderBirthdate = "Data de nascimento");
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

  /*changeProgram(program) {
  	this.user.program = program;
  }*/

  unableToSubmit(){
    return this.emptyFields() || this.emptyUniversity() ||  this.emptyCourse();
  }

  emptyFields(){
    return !this.user.scholarity || !this.user.local_committee_id
  }

  emptyUniversity(){
    if (+this.user.scholarity >= 3 && +this.user.scholarity <= 5) {
      return !this.user.university_id
    }
    else {
      return false;
    }
  }

  emptyCourse(){
    if (+this.user.scholarity >= 3 && +this.user.scholarity <= 5) {
      return !this.user.college_course_id
    }
    else {
      return false;
    }
  }

  checkDate() {
    let date = this.user.birthdate.split('/');
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

  checkPhone(){
    let cellphone = this.user.cellphone.replace(/[()_-]/g, '');

    if (cellphone.length < 10){
      this.invalidPhone = true;
      return;
    }
    else {
      this.invalidPhone = false;
    }  
  }

  nextStep() {

    this.submittedPersonal = true;
    if (this.user.password != this.user.repassword) {
      this.invalidPassword = true;
    }
    else {
      this.invalidPassword = false;
    }

    if (this.user.fullname && this.user.cellphone && this.user.email && this.user.birthdate && !this.invalidPassword && !this.invalidPhone && this.matchDate && !this.isValidPersonal('password')) {
      /*this.personalData = false;
      this.studyData = true;*/
      if(this.user.program == '0'){
        this.showGVStep = true;
      }
      if(this.user.program == '1'){
        this.showGTStep = true;     
      }
      if(this.user.program == '2'){
        this.showGEStep = true;     
      }
    }
  }

  hideGVStep() {
    this.showGVStep = false;
  }
  hideGTStep() {
    this.showGTStep = false;
  }
  hideGEStep() {
    this.showGEStep = false;
  }

  toggleFormGv() {
    this.formToggle ? this.formToggle = false : this.formToggle = true;
  }
  submit() {
    this.submittedStudy = true;

    let user = {
      gv_participant: {
        fullname: this.user.fullname,
        cellphone: this.user.cellphone.replace(/[()_-]/g, ''),
        email: this.user.email,
        password: this.user.password,
        birthdate: this.user.birthdate,
        local_committee_id: +this.user.local_committee_id,
        university_id: (this.user.university_id == null ? null : +this.user.university_id),
        college_course_id: (this.user.college_course_id == null ? null : +this.user.college_course_id),
        cellphone_contactable: (this.user.cellphone_contactable ? true : false),
        scholarity: +this.user.scholarity
      }
    };
    this.loading = true;
    this.signupService.addGvParticipant(user)
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