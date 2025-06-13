import { Component, OnInit } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../../services/employee.service';
import { IEmployee } from '../../models/IEmployee';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  templateUrl: './employee-details.component.html',
  imports: [CommonModule, DxDataGridModule],
})
export class EmployeeDetailsComponent implements OnInit {
  dataSource: IEmployee[] = [];

  constructor(private empSrvc: EmployeeService) { }

  ngOnInit() {
    this.empSrvc.getEmployees().subscribe((data: IEmployee[]) => {
      if (data && data.length > 0) {
        this.dataSource = data;
      }
    });
  }
}
