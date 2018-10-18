import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-gv-thank-you',
  templateUrl: './form-gv-thank-you.component.html',
  styleUrls: ['./form-gv-thank-you.component.scss']
})
export class FormGvThankYouComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  accessAiesec() {
    window.open("https://aiesec.org/", "_blank");
  }


}
