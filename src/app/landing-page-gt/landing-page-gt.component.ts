import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-landing-page-gt',
  templateUrl: './landing-page-gt.component.html',
  styleUrls: ['./landing-page-gt.component.scss']
})
export class LandingPageGtComponent implements OnInit {

  subproducts = [
    {
      title: 'Marketing',
      description: 'lorem'
    },
    {
      title: 'Business Administration',
      description: 'lorem'
    },
    {
      title: 'TI',
      description: 'lorem'
    },
    {
      title: '???',
      description: 'lorem'
    }
  ];


  countries = [
    {
      name: 'Bélgica',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id lacus dignissim, sagittis risus ut, pulvinar dolor. Quisque      eget lectus vehicula orci lacinia sollicitudin. Vivamus sollicitudin tellus vel leo pellentesque, quis rhoncus      mi blandit. Fusce ex felis, tempus sit amet sollicitudin sed, consequat id lorem. Vestibulum ante ipsum primis      in faucibus orci luctus et ultrices posuere cubilia Curae; Cras quis eros in odio accumsan iaculis vel a      tortor. Nullam iaculis nisl ac diam varius sodales.',
      link: '/assets/products/gt/Belgium.jpg',
      image: '../../assets/products/gt/Belgium.jpg',
      imageWebp: '../../assets/products/gt/Belgium.webp',
      icon: '../../assets/products/gt/belgium.svg',
      active: true
    },
    {
      name: 'Egito',
      description: 'lorem',
      link: 'link',
      image: '../../assets/products/gt/Egypt.png',
      imageWebp: '../../assets/products/gt/Egypt.webp',
      icon: '../../assets/products/gt/egypt.svg',
    },
    {
      name: 'Alemanhã',
      description: 'lorem',
      link: 'link',
      image: '../../assets/products/gt/Germany.jpg',
      imageWebp: '../../assets/products/gt/Germany.webp',
      icon: '../../assets/products/gt/germany.svg',
    },
    {
      name: 'Omã',
      description: 'lorem',
      link: 'link',
      image: '../../assets/products/gt/Oman.jpg',
      imageWebp: '../../assets/products/gt/Oman.webp',
      icon: '../../assets/products/gt/oman.svg',
    },
    {
      name: 'Polônia',
      description: 'lorem',
      link: 'link',
      image: '../../assets/products/gt/Poland.png',
      imageWebp: '../../assets/products/gt/Poland.webp',
      icon: '../../assets/products/gt/poland.svg',
    },
    {
      name: 'Russia',
      description: 'lorem',
      link: 'link',
      image: '../../assets/products/gt/Russia.jpg',
      imageWebp: '../../assets/products/gt/Russia.webp',
      icon: '../../assets/products/gt/russia.svg',
    },
    {
      name: 'Turquia',
      description: 'lorem',
      link: 'link',
      image: '../../assets/products/gt/Turkey.png',
      imageWebp: '../../assets/products/gt/Turkey.webp',
      icon: '../../assets/products/gt/turkey.svg',
    },
    {
      name: 'Ucrânia',
      description: 'lorem',
      link: 'link',
      image: '../../assets/products/gt/Ukraine.jpg',
      imageWebp: '../../assets/products/gt/Ukraine.webp',
      icon: '../../assets/products/gt/ukraine.svg',
    },
    {
      name: 'Estados Unidos',
      description: 'lorem',
      link: 'link',
      image: '../../assets/products/gt/Egypt.png',
      imageWebp: '../../assets/products/gt/Egypt.webp',
      icon: '../../assets/products/gt/usa.svg',
    }
  ];

  country: any;
  constructor(
  ) { }

  ngOnInit() {
    this.country = this.countries[0];
  }


  seeCountryDetails(country){
    _.forEach(this.countries, (item) => {
      item.active = false;
      if (item.name == country.name){
        item.active = true;
      }
    })
    this.country = country;
  }
}
