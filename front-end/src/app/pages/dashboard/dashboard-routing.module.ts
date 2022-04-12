import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'students',
        loadChildren: () => import('./students/students.module').then(m => m.StudentsModule)
      },
      {
        path: 'add-student',
        loadChildren: () => import('./add-student/add-student.module').then(m => m.AddStudentModule)
      },
      {
        path: '**',
        redirectTo: 'students',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'students',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
