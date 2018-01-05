import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public emailAddress:string;
  public password:string;
  constructor(private loginService: LoginService, private router:  Router) { }

  ngOnInit() {
    if(sessionStorage.getItem('loggedIn') === 'true')
      this.router.navigateByUrl('/emp-reimbursement-view');
  }

  public sendLogin() {
    this.loginService.doLogin(this.emailAddress, this.password).subscribe(response => {
      if(response['lastLogin'] === null) {
        this.router.navigateByUrl('/change-password');
      }
      else if(response['loggedIn'] === true) {
        this.router.navigateByUrl('/emp-reimbursement-view');
      } 
      else {
        alert('Invalid credentials.');
      }
    });
  }
}

