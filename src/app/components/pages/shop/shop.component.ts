import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor() { }
  advimg = 'assets/images/add-2.jpg';
  // Shop box
  shopboxes = [
    {img:'assets/images/shop-1.jpg',productname:'Blue Table',productprice:45.99,discountprice:30.99},
    {img:'assets/images/shop-2.jpg',productname:'Blue Table',productprice:45.99,discountprice:30.99},
    {img:'assets/images/shop-3.jpg',productname:'Blue Table',productprice:45.99,discountprice:30.99},
    {img:'assets/images/shop-4.jpg',productname:'Blue Table',productprice:45.99,discountprice:30.99},
    {img:'assets/images/shop-5.jpg',productname:'Blue Table',productprice:45.99,discountprice:30.99},
    {img:'assets/images/shop-6.jpg',productname:'Blue Table',productprice:45.99,discountprice:30.99},
    {img:'assets/images/shop-7.jpg',productname:'Blue Table',productprice:45.99,discountprice:30.99},
    {img:'assets/images/shop-8.jpg',productname:'Blue Table',productprice:45.99,discountprice:30.99},
    {img:'assets/images/shop-9.jpg',productname:'Blue Table',productprice:45.99,discountprice:30.99},
    {img:'assets/images/shop-10.jpg',productname:'Blue Table',productprice:45.99,discountprice:30.99},
    {img:'assets/images/shop-11.jpg',productname:'Blue Table',productprice:45.99,discountprice:30.99},
    {img:'assets/images/shop-12.jpg',productname:'Blue Table',productprice:45.99,discountprice:30.99},
  ];
  // Category
  category = [
    {title:'Accessories'},
    {title:'Clothing'},
    {title:'Decor'},
    {title:'Hoodies'},
    {title:'Music'},
    {title:'Tshirts'},
    {title:'Uncategorized'},
  ];
  // Keyword
  keyword = [
    {tag:'Cleaning'},
    {tag:'Business'},
    {tag:'IT'},
    {tag:'Car'},
    {tag:'Agency'},
    {tag:'Laptop'},
    {tag:'Washing'},
    {tag:'Paper'},
    {tag:'Pen'},
    {tag:'Tea'},
    {tag:'Coffee'},
    {tag:'Keyboard'},
  ];

  ngOnInit(): void {
  }

}
