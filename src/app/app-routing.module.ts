import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeAddComponent } from './employees/employee-add/employee-add.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentListComponent } from './student-list/student-list.component';


const routes: Routes = [
  { path: 'students', component: StudentListComponent },
  { path: 'students/add', component: StudentAddComponent },
  { path: 'employees/add', component: EmployeeAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
