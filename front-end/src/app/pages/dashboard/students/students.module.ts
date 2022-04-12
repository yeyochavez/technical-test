import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';
import { StudentsRoutingModule } from './students-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [StudentsComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentsRoutingModule,
    ReactiveFormsModule,
    CoreModule,
    ComponentsModule
  ]
})
export class StudentsModule { }
