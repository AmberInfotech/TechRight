import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentListComponent } from './student-list/student-list.component';


const routes: Routes = [
  { path: 'students', component: StudentListComponent },
  { path: 'students/add', component: StudentAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
