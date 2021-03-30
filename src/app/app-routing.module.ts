import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDeptComponent } from './departments/add-dept/add-dept.component';
import { ListDeptComponent } from './departments/list-dept/list-dept.component';
import { EmployeeAddComponent } from './employees/employee-add/employee-add.component';
import { ListEmployeeComponent } from './employees/list-employee/list-employee.component';
import { StudentAddComponent } from './students/student-add/student-add.component';
import { StudentListComponent } from './students/student-list/student-list.component';
import { RegisterVolunteerComponent } from './volunteers/register-volunteer/register-volunteer.component';


const routes: Routes = [
  { path: 'students', component: StudentListComponent },
  { path: 'students/add', component: StudentAddComponent },
  { path: 'employees/add', component: EmployeeAddComponent },
  { path: 'employees', component: ListEmployeeComponent },
  { path: 'volunteer/register', component: RegisterVolunteerComponent },
  { path: 'dept/add', component: AddDeptComponent },
  { path: 'depts', component: ListDeptComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
