import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = environment.API_HOST + 'employees/';

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
