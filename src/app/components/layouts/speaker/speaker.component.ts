import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.css']
})
export class SpeakerComponent implements OnInit {

  constructor() { }
  // Speakers
  speakersblock = [
    {img:'assets/images/team-1.png',name:'Rosalina William',post:'UX DESIGN'},
    {img:'assets/images/team-2.png',name:'Catherine Crain',post:'CEO'},
    {img:'assets/images/team-3.png',name:'David Hald',post:'HEAD OF TECHNOLOGY'},
    {img:'assets/images/team-4.png',name:'Sheila Monta',post:'HEAD OF FINANCE'},
    {img:'assets/images/team-5.png',name:'Rosalina William',post:'UX DESIGN'},
    {img:'assets/images/team-6.png',name:'Catherine Crain',post:'CEO'},
    {img:'assets/images/team-7.png',name:'David Hald',post:'HEAD OF TECHNOLOGY'},
    {img:'assets/images/team-8.png',name:'Sheila Monta',post:'HEAD OF FINANCE'},
  ];

  ngOnInit(): void {
  }

}
