import { AfterViewInit, Component } from '@angular/core';
import * as $ from 'jquery';
import 'magnific-popup';

@Component({
  selector: 'app-filterevent',
  templateUrl: './filterevent.component.html',
  styleUrls: ['./filterevent.component.css']
})
export class FiltereventComponent implements AfterViewInit {
category = localStorage.getItem('category');
fest = document.getElementById('fest');
sport = document.getElementById('sport');
cine = document.getElementById('cine');
thea  = document.getElementById('thea');
other = document.getElementById('other');
  constructor() { }
  // Event grid
  eventgridbox = [
    {cat:'cat-1 cat-4',userimg:'assets/images/event-1.png',videoposter:'assets/images/events-thumb.png',name:'Rosalina William',post:'UX DEISGN',location:'Waterfront Hotel, London',time:'9.30 - 10.30 AM',title:'UX Design Trend Party 2019',text:'In order to save time you have to break down the content strategy for the event or conference you are planning step by step. Creating this process from scratch will take the longest amount of time to build, but once you have content production foundation.'},
    {cat:'cat-2',userimg:'assets/images/event-2.png',videoposter:'assets/images/events-thumb-2.png',name:'Rosalina William',post:'UX DEISGN',location:'Waterfront Hotel, London',time:'9.30 - 10.30 AM',title:'UX Design Trend Party 2019',text:'In order to save time you have to break down the content strategy for the event or conference you are planning step by step. Creating this process from scratch will take the longest amount of time to build, but once you have content production foundation.'},
    {cat:'cat-3',userimg:'assets/images/event-3.png',videoposter:'assets/images/events-thumb-3.png',name:'Rosalina William',post:'UX DEISGN',location:'Waterfront Hotel, London',time:'9.30 - 10.30 AM',title:'UX Design Trend Party 2019',text:'In order to save time you have to break down the content strategy for the event or conference you are planning step by step. Creating this process from scratch will take the longest amount of time to build, but once you have content production foundation.'},
    {cat:'cat-1 cat-2 cat-3 cat-4',userimg:'assets/images/event-4.png',videoposter:'assets/images/events-thumb-4.png',name:'Rosalina William',post:'UX DEISGN',location:'Waterfront Hotel, London',time:'9.30 - 10.30 AM',title:'UX Design Trend Party 2019',text:'In order to save time you have to break down the content strategy for the event or conference you are planning step by step. Creating this process from scratch will take the longest amount of time to build, but once you have content production foundation.'},
  ];
  
  ngAfterViewInit(): void {
    // Video popup
    ($('.video-popup') as any).magnificPopup({
      type: 'iframe',
    });
    // Filter
    function filter() {
      $(document).ready(function () {
        $(".events-btn").click(function () {
          var value = $(this).attr('data-filter');
          if (value == "cat-1") {
            $('.events-item').show(1000);
          }
          else {
            $(".events-item").not('.' + value).hide(3000);
            $('.events-item').filter('.' + value).show(3000);
          }
        });
      });
      $(".events-btn").click(function () {
        if (!$(this).hasClass('active_btn')) { 
          $(".events-btn").removeClass("active_btn"); 
          $(this).addClass("active_btn"); }
      });
    }
    filter();
  }

}
