import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';


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
    children: [
      { path: 'departments', loadChildren: () => import('./departments/departments.module').then(r => r.DepartmentModule), },
      { path: 'employees', loadChildren: () => import('./employees/employee.module').then(r => r.EmployeeModule), }
    ]
  }

  // { path: 'students', component: StudentListComponent },
  // { path: 'students/add', component: StudentAddComponent },
  // { path: 'volunteer/register', component: RegisterVolunteerComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
