import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/core/models/student.model';
import { StudentService } from 'src/app/core/services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent implements OnInit {

  students: Student[];
  filterStudent: Student[];
  isLoading: boolean;

  constructor(private _studentService: StudentService) {
    this.students = [];
    this.filterStudent = [];
    this.isLoading = false;
  }

  async ngOnInit() {
    await this.getAllStudents();
  }

  async getAllStudents(): Promise<void> {
    this.isLoading = true;
    this.students = await this._studentService.getAllStudents();
    this.isLoading = false;
    this.filterStudent = this.students;
  }

  async handlerSearch(event: any): Promise<void> {
    let value = event.target.value;
    if (value) {
      this.isLoading = true;
      this.filterStudent = await this._studentService.getAllStudentsByDegree(value);
      this.isLoading = false;
      event.target.value = "";
      return;
    }
    this.filterStudent = this.students;
  }

  handlerClear(): void {
    this.filterStudent = this.students;
  }

  async handlerRefresh(): Promise<void> {
    await this.getAllStudents();
  }

}
