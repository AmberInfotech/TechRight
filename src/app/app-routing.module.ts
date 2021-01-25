import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeAddComponent } from './employees/employee-add/employee-add.component';
import { StudentAddComponent } from './students/student-add/student-add.component';
import { StudentListComponent } from './students/student-list/student-list.component';
import { RegisterVolunteerComponent } from './volunteers/register-volunteer/register-volunteer.component';


const routes: Routes = [
  { path: 'students', component: StudentListComponent },
  { path: 'students/add', component: StudentAddComponent },
  { path: 'employees/add', component: EmployeeAddComponent },
  { path: 'volunteer/register', component: RegisterVolunteerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
