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
import { AddDeptComponent } from './add-dept/add-dept.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentAddComponent,
    StudentListComponent,
    StudentDetailComponent,
    EmployeeAddComponent,
    RegisterVolunteerComponent,
    AddDeptComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
