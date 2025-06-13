import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeDetailsComponent } from './components';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EmployeeDetailsComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'smtss-web';
  selectedFile: File | null = null;
  employeeList: any[] = [];

  constructor(private employeeService: EmployeeService) {}

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const allowedTypes = [
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'application/vnd.ms-excel',
        '.xls',
        '.xlsx'
      ];
      if (allowedTypes.some(type => file.type.includes(type) || file.name.endsWith(type))) {
        this.selectedFile = file;
      } else {
        alert('Please select a valid Excel file (.xls or .xlsx)');
        input.value = '';
        this.selectedFile = null;
      }
    }
  }

  onUpload() {
    if (this.selectedFile) {
      this.employeeService.uploadEmployeeFile(this.selectedFile).subscribe({
        next: (response) => {
          // alert('File uploaded successfully!');
          console.log('File uploaded successfully!', response);
          this.employeeList = response; // Assuming the response contains the list of employees
        },
        error: (err) => {
          alert('File upload failed.');
        }
      });
    } else {
      alert('Please select an Excel file to upload.');
    }
  }
}
