import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentAddComponent } from './students/student-add/student-add.component';
import { StudentListComponent } from './students/student-list/student-list.component';
import { StudentDetailComponent } from './students/student-detail/student-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeAddComponent } from './employees/employee-add/employee-add.component';
import { RegisterVolunteerComponent } from './volunteers/register-volunteer/register-volunteer.component';
import { AddDeptComponent } from './departments/add-dept/add-dept.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListDeptComponent } from './departments/list-dept/list-dept.component';
import { ListEmployeeComponent } from './employees/list-employee/list-employee.component';
import { LoginComponent } from './authentication/login/login.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { RegisterComponent } from './authentication/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentAddComponent,
    StudentListComponent,
    StudentDetailComponent,
    EmployeeAddComponent,
    RegisterVolunteerComponent,
    AddDeptComponent,
    ListDeptComponent,
    ListEmployeeComponent,
    LoginComponent,
    AuthLayoutComponent,
    AdminLayoutComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
