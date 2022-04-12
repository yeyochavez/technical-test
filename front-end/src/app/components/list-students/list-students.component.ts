import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/app/core/models/student.model';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
})
export class ListStudentsComponent implements OnInit {

  @Input() students: Student[];

  constructor() {
    this.students = [];
  }

  ngOnInit() {
  }

}
