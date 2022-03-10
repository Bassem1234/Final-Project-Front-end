import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  constructor(private router: Router) { }
  searchForm: any;
  ngOnInit(): void {
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
