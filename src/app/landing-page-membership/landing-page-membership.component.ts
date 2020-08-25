import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import * as moment from "moment";
import { SignupService } from "../services/signup.service";
import { Message } from "primeng/components/common/api";
import { MessageService } from "primeng/components/common/messageservice";
import { Observable } from "rxjs";
import * as _ from "lodash";
import * as $ from "jquery";
import { map, startWith } from "rxjs/operators";
import { AmplitudeService } from "../amplitude.service";

@Component({
  selector: "app-landing-page-membership",
  templateUrl: "./landing-page-membership.component.html",
  styleUrls: ["./landing-page-membership.component.scss"],
})
export class LandingPageMembershipComponent implements OnInit {
  window: any = window;

  user = {
    fullname: "",
    cellphone: "",
    local_committee: { id: "" },
    email: "",
    cep: "",
    neighborhood: "",
    city: "",
    state: "",
    birthdate: "",
    cellphone_contactable: true,
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
    college_course: { id: "", name: "" },
  };

  invalidEmail: boolean = false;
  invalidPassword: boolean = false;
  invalidDate: boolean = false;
  invalidPhone: boolean = false;
  invalidZipcode: boolean = false;
  hasZipCode: boolean = false;
  loading: boolean = false;
  matchDate: boolean = true;
  modal: boolean = false;

  sliderPosition: number = 0;
  timer: any;

  placeholderBirthdate: string;

  signUp: FormGroup;

  filteredCourses: Observable<any[]>;
  filteredPlaces: Observable<any[]>;

  courses: any;
  places: any;

  msgs: Message[] = [];

  constructor(
    public amplitude: AmplitudeService,
    public signupService: SignupService
  ) {
    this.signUp = new FormGroup({
      fullname: new FormControl(this.user.fullname, [Validators.required]),
      cellphone: new FormControl(this.user.cellphone, [Validators.required]),
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.pattern(
          /^(([^*?<>().,;:\s@]+(\.[^*?<>().,;:\s@]+)*))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ),
      ]),
      neighborhood: new FormControl(this.user.neighborhood, [
        Validators.required,
      ]),
      city: new FormControl(this.user.city, [Validators.required]),
      cep: new FormControl(this.user.cep, [Validators.required]),
      state: new FormControl(this.user.state, [Validators.required]),
      local_committee_id: new FormControl(this.user.local_committee, [
        Validators.required,
      ]),
      college_course_id: new FormControl(this.user.college_course, [
        Validators.required,
      ]),
      cellphone_contactable: new FormControl(this.user.cellphone_contactable, [
        Validators.required,
      ]),
      birthdate: new FormControl(this.user.birthdate, [Validators.required]),
    });
    window.innerWidth > 600
      ? (this.placeholderBirthdate =
          "Os programas da AIESEC são para pessoas de 18 a 30 anos")
      : (this.placeholderBirthdate = "Data de Nascimento");
  }

  checkDate() {
    let date = moment(this.user.birthdate, "DDMMYYYY")
      .format("DD/MM/YYYY")
      .split("/");
    if (
      +date[0] > 0 &&
      +date[0] <= 31 &&
      +date[1] > 0 &&
      +date[1] <= 12 &&
      +date[2] > 1900 &&
      +date[2] < moment().year()
    ) {
      this.invalidDate = false;
      let date = moment(this.user.birthdate, "DD/MM/YYYY").format("YYYY-MM-DD");
      let age = moment().diff(date, "years", false);
      age >= 18 && age <= 30
        ? (this.matchDate = true)
        : (this.matchDate = false);
    } else {
      this.invalidDate = true;
    }
  }

  onResize(event) {
    event.target.innerWidth > 600
      ? (this.placeholderBirthdate =
          "Os programas da AIESEC são para pessoas de 18 a 30 anos")
      : (this.placeholderBirthdate = "Data de nascimento");
  }

  ngOnInit() {
    this.window.ga("set", "page", "/membresia");
    this.window.ga("send", "pageview");

    this.fillCourseSelect().then(() => {
      this.filteredCourses = this.courses;
    });

    this.fillPlacesSelect().then(() => {
      this.filteredPlaces = this.signUp.controls.local_committee_id.valueChanges.pipe(
        startWith(""),
        map((value) => this._filter(value, this.places))
      );
    });
  }

  private _filter(value: string, options: any): any[] {
    const filterValue = value.length ? value.toLowerCase() : value;
    return options.filter((option) =>
      option.name.toLowerCase().includes(filterValue)
    );
  }

  _search(options, search) {
    return _.filter(options, (option) => {
      return (
        option.name
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .indexOf(
            search
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
          ) > -1
      );
    });
  }

  searchPlaces(event) {
    this.filteredPlaces = this._search(this.places, event.query);
  }

  fillCourseSelect() {
    return this.signupService.getCourses().then(
      (res: any) => {
        let orderedList = _.orderBy(res, ["name"], ["asc"]);
        let other = _.remove(orderedList, (item) => item.name === "Outro");
        this.courses = _.union(orderedList, other);
      },
      (err) => {
        this.msgs = [];
        this.msgs.push({
          severity: "error",
          summary: "FALHA EM RECUPERAR DADOS!",
          detail: "Não foi possível recuperar os dados dos cursos disponíveis.",
        });
      }
    );
  }

  fillPlacesSelect() {
    return this.signupService.getLocalCommittees().then(
      (res: any) => {
        let orderedList = _.orderBy(res, ["name"], ["asc"]);
        this.places = orderedList;
      },
      (err) => {
        this.msgs = [];
        this.msgs.push({
          severity: "error",
          summary: "FALHA EM RECUPERAR DADOS!",
          detail: "Não foi possível recuperar os dados das AIESEC disponíveis.",
        });
      }
    );
  }

  moveLeft() {
    if (this.sliderPosition - 100 < 0) {
      this.sliderPosition = 300;
    } else {
      this.sliderPosition -= 100;
    }
    $("#our-stories .carousel-wrapper").animate({
      left: "-" + this.sliderPosition + "%",
    });
    this.sliderAnimation();
  }

  moveRight() {
    if (this.sliderPosition + 100 > 300) {
      this.sliderPosition = 0;
    } else {
      this.sliderPosition += 100;
    }
    $("#our-stories .carousel-wrapper").animate({
      left: "-" + this.sliderPosition + "%",
    });
    this.sliderAnimation();
  }

  sliderAnimation() {
    this.stopAnimation();
    this.timer = setInterval(() => {
      this.moveRight();
    }, 10000);
  }

  swipe(side: string) {
    this.stopAnimation();
    side == "left" ? this.moveRight() : this.moveLeft();
  }

  stopAnimation() {
    clearInterval(this.timer);
  }

  selectInput(element) {
    $(".form-group").css("z-index", "-1");
    $("." + element).css("z-index", "10");
  }

  clearField(field) {
    this.user[field] = "";
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
    this.modal
      ? $("html").css("overflow", "hidden")
      : $("html").css("overflow", "auto");
  }

  scrollTo(el: HTMLElement) {
    el.scrollIntoView();
    window.scrollBy(0, -50);
  }

  goToInscreva() {
    this.amplitude.trackingClickInscrevaMemberShip();
  }
}
