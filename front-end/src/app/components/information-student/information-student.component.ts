import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/app/core/models/student.model';

@Component({
  selector: 'app-information-student',
  templateUrl: './information-student.component.html',
  styleUrls: ['./information-student.component.scss'],
})
export class InformationStudentComponent implements OnInit {

  @Input() student: Student;

  constructor() { }

  ngOnInit() {}

}
