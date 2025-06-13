import { Component, Input, OnInit } from '@angular/core';
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
export class EmployeeDetailsComponent {
  @Input() dataSource: IEmployee[] = []; // Input property to accept data from parent component
}
