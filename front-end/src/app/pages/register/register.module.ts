import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { CoreModule } from 'src/app/core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterRoutingModule } from './register-routing.module';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
    CoreModule,
  ]
})
export class RegisterModule { }
