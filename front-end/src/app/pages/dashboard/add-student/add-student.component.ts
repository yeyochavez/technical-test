import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/core/models/student.model';
import { StorageService } from 'src/app/core/services/storage.service';
import { StudentService } from 'src/app/core/services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss'],
})
export class AddStudentComponent {

  messageError: string;
  isLoading: boolean;

  constructor(private _studentService: StudentService,
    private router: Router,
    private _storage: StorageService) {
    this.isLoading = false;
  }

  async handlerStudent(student: Student): Promise<void> {
    this.isLoading = true;
    await this._studentService.saveStudent(student)
      .then(() => {
        this.navigateToStudentList()
      })
      .catch(() => this.messageError = "Por favor, diligencia todos los campos correctamente");
    this.isLoading = false;
  }

  navigateToStudentList() {
    this.router.navigate(['dashboard']);
  }

  handlerLogOut(): void {
    if (this._storage.existUser()) {
      this._storage.removeUser();
      this.router.navigate(['login']);
    }
  }

}
