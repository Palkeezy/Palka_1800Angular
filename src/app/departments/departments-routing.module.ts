import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AllDepartmentsComponent} from './all-departments/all-departments.component';
import {InfoDepartmentComponent} from './info-department/info-department.component';

const routes: Routes = [
  {path: '', component: AllDepartmentsComponent},
  {path: ':id', component: InfoDepartmentComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DepartmentsRoutingModule { }
