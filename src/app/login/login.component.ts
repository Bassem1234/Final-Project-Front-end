import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ManagmentServiceService } from '../managment-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  show = true;
  pass = 'password';
  loginForm: any;
  auth = '';
  constructor(private managmentService: ManagmentServiceService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required]),
      'password': new FormControl('',[Validators.required])
    });
  }
  showPass() {
    this.show = !this.show;
  }
  login() {
    this.managmentService.login(this.loginForm.value).subscribe((response: any) => {

      if(response.message != 'Wrong email or password'){

        localStorage.setItem('token', response.token);
          localStorage.setItem('userId', response.id);
          localStorage.setItem('user', JSON.stringify(response.user))
          this.router.navigate(['home']);
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
