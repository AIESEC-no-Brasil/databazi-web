import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import 'hammerjs';

@Component({
  selector: 'app-slider-membership-host',
  templateUrl: './slider-membership-host.component.html',
  styleUrls: ['./slider-membership-host.component.scss']
})
export class SliderMembershipHostComponent implements OnInit {

  slider : boolean = true;
  actualPage : string = '';
  
  constructor(
    public router: Router
  ) { }

  ngOnInit() {
    this.checkUrl();
    console.log('this.actualPage', this.actualPage, this.slider);
    if(this.actualPage != 'membresia'){
      console.log('eaee');
      this.timerSlider();
    }
  }


  timerSlider(){
    setInterval(()=>{
      this.slider ? this.slider = false : this.slider = true;
    }, 3000)
  }
  goToHost(){
    this.router.navigate(['/lar-global']);
    
  }

  goToMembership(){
    window.open('http://promo.aiesec.org.br/sejamembro/')
  }

  checkUrl(){
    this.actualPage = this.router.url.replace('/', '');
  };

}
