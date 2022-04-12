import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListStudentsComponent } from './list-students/list-students.component';
import { InformationStudentComponent } from './information-student/information-student.component';
import { IonicModule } from '@ionic/angular';
import { FormStudentComponent } from './form-student/form-student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ListStudentsComponent, InformationStudentComponent, FormStudentComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ], exports: [
    ListStudentsComponent, InformationStudentComponent, FormStudentComponent
  ]
})
export class ComponentsModule { }
