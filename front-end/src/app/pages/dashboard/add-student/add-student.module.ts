import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddStudentComponent } from './add-student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddStudentRoutingModule } from './add-student-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [AddStudentComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddStudentRoutingModule,
    ReactiveFormsModule,
    CoreModule,
    ComponentsModule
  ]
})
export class AddStudentModule { }
