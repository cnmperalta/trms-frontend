import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-reimbursement-view',
  templateUrl: './emp-reimbursement-view.component.html',
  styleUrls: ['./emp-reimbursement-view.component.css']
})
export class EmpReimbursementViewComponent implements OnInit {

  constructor(private router: Router) { }
  
  ngOnInit() {
    if(sessionStorage.getItem('loggedIn') === null || sessionStorage.getItem('loggedIn') === 'false')
      this.router.navigateByUrl('login');
  }

}
