import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  public doLogin(email: string, password: string): Observable<any> {
    let loginObs = this.httpClient.post('http://localhost:8082/TRMS/login',
      {
        'emailAddress': email,
        'password': password
      },
      {
        headers: {
          'Content-Type' : 'application/json'
        }
      }
    );
    loginObs.subscribe(response => {
      sessionStorage.setItem('employeeID', String(response['employeeId']));
      sessionStorage.setItem('directSupervisorID', String(response['directSupervisorId']));
      sessionStorage.setItem('departmentHeadID', String(response['departmentHeadId']));
      sessionStorage.setItem('employeeType', String(response['employeeType']));
      if(response['lastLogin'] != null)
        sessionStorage.setItem('loggedIn', 'true');
      console.log(response);
    });

    return loginObs;
  }

  public doLogout(): void {
    sessionStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
