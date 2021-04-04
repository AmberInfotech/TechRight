import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeAddComponent } from './employees/employee-add/employee-add.component';
import { ListEmployeeComponent } from './employees/list-employee/list-employee.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { StudentAddComponent } from './students/student-add/student-add.component';
import { StudentListComponent } from './students/student-list/student-list.component';
import { RegisterVolunteerComponent } from './volunteers/register-volunteer/register-volunteer.component';


const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [{
      path: '', loadChildren: () => import('./authentication/authentication.module').then(r => r.AuthenticationModule)
    }]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: 'departments', loadChildren: () => import('./departments/departments.module').then(r => r.DepartmentModule)
    }
    ]
  }

  // { path: 'students', component: StudentListComponent },
  // { path: 'students/add', component: StudentAddComponent },
  // { path: 'employees/add', component: EmployeeAddComponent },
  // { path: 'employees', component: ListEmployeeComponent },
  // { path: 'volunteer/register', component: RegisterVolunteerComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
