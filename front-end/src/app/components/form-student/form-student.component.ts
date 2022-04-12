import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Student } from 'src/app/core/models/student.model';

@Component({
  selector: 'app-form-student',
  templateUrl: './form-student.component.html',
  styleUrls: ['./form-student.component.scss'],
})
export class FormStudentComponent {

  studentForm: FormGroup;

  @Output() studentEvent: EventEmitter<Student>;

  constructor() {
    this.createUserForm();
    this.studentEvent = new EventEmitter<Student>();
  }

  createUserForm(): void {
    let formProperties = Object.getOwnPropertyNames(new Student());
    let object = {}
    formProperties.forEach(propertie => {
      object[propertie] = new FormControl("", [Validators.required]);
    })
    this.studentForm = new FormGroup(object);
  }

  handlerSubmit(): void {
    let user = Object.assign(new Student, this.studentForm.value);
    this.studentEvent.emit(user);
    this.studentForm.reset();
  }
}
