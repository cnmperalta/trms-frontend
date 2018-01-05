import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EmpReimbursementService {

  constructor(private httpClient: HttpClient) { }

  public getEmployeeReimbursements() {
    return this.httpClient.post('http://localhost:8082/TRMS/get-reimbursements',
      {
        requesterID: parseInt(sessionStorage.getItem('employeeID'))
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }

  public getEmployeeReimbursementById(reimbursementId: number): Observable<any> {
    return this.httpClient.post('http://localhost:8082/TRMS/get-reimbursement',
      {
        reimbursementID: reimbursementId
      }
    );
  }
}
