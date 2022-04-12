import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './services/student.service';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { AuthguardService } from './services/authguard.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    StudentService,
    UserService,
    AuthService,
    Storage,
    AuthguardService
  ]
})
export class CoreModule { }
