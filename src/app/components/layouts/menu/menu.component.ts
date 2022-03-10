import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  searchForm: any;
user:any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.searchForm = new FormGroup({
      'search': new FormControl('')
    })
    function navigation() {
      $(document).ready(function () {
        $('.menu-item-has-children > a').parent().append('<span class="dd-trigger"><i class="fas fa-angle-down"></i></span>');
      });
      $(".menu-item-has-children > a").on('click', function (e) {
        var submenu = $(this).next(".sub-menu");
        e.preventDefault();
        submenu.slideToggle(200);
      });
    }
    navigation();
  }
  searchEvent(){
     localStorage.setItem('search', JSON.stringify(this.searchForm.value.search));
    this.router.navigate(['/search-result']);
    if (this.router.url.startsWith("/search-result")) {
      window.location.reload();        
  }
  }
}
