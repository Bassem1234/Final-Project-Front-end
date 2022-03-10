import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: any;
  pass = false;
  cpass = false;
  zip = '';
  message = '';
  approved ='';
  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({

      fName: new FormControl('', [Validators.required]),
      lName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      profile: new FormControl('Simple user'),
      adress: new FormControl('', [Validators.required]),
      zip: new FormControl('', [Validators.required])
    });
  }
  hidePass() {
    this.pass = !this.pass;
  }
  showPass() {
    this.pass = !this.pass;
  }
  hidecPass() {
    this.cpass = !this.cpass;
  }
  showcPass() {
    this.cpass = !this.cpass;
  }
  register() {
    if (this.registerForm.invalid) {
      this.message = "Please fill all mandatory fields!"
      this.approved = '';
    }
    else {
      this.registerForm.value.adress += ' ' + this.registerForm.value.zip;
      this.registerService.register(this.registerForm.value).subscribe((response: any) => {
        if(response.message != 'email already exists, please choose another email'){
          this.showSuccessMessage(
            '',
            response.message,
            'success',
            true,
          )
          setTimeout(() => {
            this.router.navigate(['login']);
          }, 2000);
        }
        else {
          this.showSuccessMessage(
            '',
            response.message,
            'error',
            true,
          )
        }
      });
    }
  }
  showSuccessMessage(
    title: any, message: any, icon = null,
    showCancelButton = false) {
    return Swal.fire({
      title: title,
      text: message,
      icon: icon,
    });
  }
}
