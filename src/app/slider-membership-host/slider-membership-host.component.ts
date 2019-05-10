import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import 'hammerjs';

@Component({
  selector: 'app-slider-membership-host',
  templateUrl: './slider-membership-host.component.html',
  styleUrls: ['./slider-membership-host.component.scss']
})
export class SliderMembershipHostComponent implements OnInit {

  slider : boolean = false;
  
  constructor(
    public router: Router
  ) { }

  ngOnInit() {
   this.timerSlider();
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

}
