import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeDetailsComponent } from './components';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EmployeeDetailsComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'smtss-web';
  selectedFile: File | null = null;

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
      // TODO: Implement upload logic
      alert('File ready for upload: ' + this.selectedFile.name);
    } else {
      alert('Please select an Excel file to upload.');
    }
  }
}
