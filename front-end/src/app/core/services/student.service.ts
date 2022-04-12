import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL, STUDENTS_URL } from '../constants/urls.constant';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  BASE_URL: string;

  constructor(private _http: HttpClient) {
    this.BASE_URL = BASE_URL + STUDENTS_URL;
  }

  getAllStudents(): Promise<Student[]> {
    return this._http.get<any>(this.BASE_URL).toPromise();
  }

  getAllStudentsByDegree(degree: number): Promise<Student[]> {
    let completeUrl = this.BASE_URL + "degree/" + degree;
    return this._http.get<any>(completeUrl).toPromise();
  }

  saveStudent(student: Student): Promise<Student> {
    return this._http.post<any>(this.BASE_URL, student).toPromise();
  }

}
