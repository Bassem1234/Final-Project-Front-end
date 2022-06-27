import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import { EmailService } from 'src/app/email.service';
import { LoadingService } from 'src/app/loading.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
id = '6227b736aeae7858531fb2ca';
loading$ = this.loader.loading$;
  constructor(private router: Router, private emailService: EmailService, private adminService: AdminService, public loader: LoadingService) { 
    this.adminService.getAdminList().subscribe((response:any)=>{
      localStorage.setItem('adminId',response[response.length-1]._id);
    });
  }
  marker = 'assets/images/icon/marker.png';
head = false;
text = '';
user = JSON.parse(localStorage.getItem('user') || '');
emailForm:any;
  ngOnInit(): void {
    if(localStorage.getItem('token') != undefined){
      this.head = true;
    }
    this.emailForm = new FormGroup({
      text : new FormControl('')
    })
  }
  submitMessage(){
    if(localStorage.getItem('token') == undefined){
      this.router.navigate(['login']);
    }
    else {
      this.id = localStorage.getItem('adminId');
    this.adminService.adminMessage(localStorage.getItem('adminId'), {from: this.user.fName + ' ' +  this.user.lName, email: this.user.email, text: this.emailForm.value.text}).subscribe((response:any)=>{
      alert('you message has been sent!! we ll answer you by an email or we will call you');
    });
     }
  }

}
