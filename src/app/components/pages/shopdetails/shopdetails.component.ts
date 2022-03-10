import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopdetails',
  templateUrl: './shopdetails.component.html',
  styleUrls: ['./shopdetails.component.css']
})
export class ShopdetailsComponent implements OnInit {

  constructor() { }
  // Shop detail
  shopimgbig = [
    { img: 'assets/images/shop-13.jpg' },
    { img: 'assets/images/shop-13.jpg' },
    { img: 'assets/images/shop-13.jpg' },
    { img: 'assets/images/shop-13.jpg' },
  ];
  shopimgthumb = [
    { img: 'assets/images/shop-thumb-1.jpg' },
    { img: 'assets/images/shop-thumb-2.jpg' },
    { img: 'assets/images/shop-thumb-3.jpg' },
    { img: 'assets/images/shop-thumb-2.jpg' },
  ];
  shopimgbigConfig = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    asNavFor: '.product-thumb-slide',
    slidesToShow: 1,
    slidesToScroll: 1
  };
  shopimgthumbConfig = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    focusOnSelect: true,
    asNavFor: '.product-big-slide',
    prevArrow: '<div class="arrow prev"><i class="fas fa-angle-left"></i></div>',
    nextArrow: '<div class="arrow next"><i class="fas fa-angle-right"></i></div>',
    slidesToShow: 3,
    slidesToScroll: 1
  };
  // Quantity 
  public counter: number = 1
  increment() {
    this.counter += 1;
  }
  decrement() {
    this.counter -= 1;
  }
  // Specifications
  specifications = [
    {title:'Brand',text:'Apple 18'},
    {title:'Item HeightItem Width',text:'Millimeters 31.4'},
    {title:'Screen Size',text:'Centimeters 3 Inches'},
    {title:'Item Weight',text:'1.6 Kg'},
    {title:'Product Dimensions',text:'21.9 x 31.4 x 1.8 cm'},
    {title:'Item model number',text:'MF841HN/A'},
    {title:'Processor Brand',text:'Intel'},
    {title:'Processor Type',text:'Core i5'},
    {title:'Processor Speed',text:'2.9 GHz'},
    {title:'RAM Size',text:'8 GB'},
    {title:'Hard Drive Size',text:'512 GB'},
    {title:'Hard Disk Technology',text:'Solid State'},
    {title:'Graphics Coprocessor',text:'Drive Intel Integrated Graphics'},
  ];
  // Review
  personone = 'assets/images/person-1.jpg'

  ngOnInit(): void {
  }

}
