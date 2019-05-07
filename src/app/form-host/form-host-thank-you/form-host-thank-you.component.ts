import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-host-thank-you',
  templateUrl: './form-host-thank-you.component.html',
  styleUrls: ['./form-host-thank-you.component.scss']
})
export class FormHostThankYouComponent implements OnInit {

  
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  redirectToHome(){
    this.router.navigate(['/']);
  }

}
