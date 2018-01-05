import { Component, OnInit } from '@angular/core';
import { EmpReimbursementService } from '../shared/emp-reimbursement.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-emp-reimbursement-detail',
  templateUrl: './emp-reimbursement-detail.component.html',
  styleUrls: ['./emp-reimbursement-detail.component.css']
})
export class EmpReimbursementDetailComponent implements OnInit {
  public reimbursement;

  constructor(private empReimbursementService: EmpReimbursementService, private route: ActivatedRoute) { }

  ngOnInit() {
    let rid: number = parseInt(this.route.snapshot.params['reimbursementId']);
    this.empReimbursementService.getEmployeeReimbursementById(rid).subscribe( response => {
      this.reimbursement = response;
    });
  }

}
