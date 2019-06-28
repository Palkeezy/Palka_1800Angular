import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AllDepartmentsComponent} from './all-departments/all-departments.component';
import {InfoDepartmentComponent} from './info-department/info-department.component';
import {DepartmentsRoutingModule} from './departments-routing.module';
import {DepartmentsComponent} from './departments.component';

@NgModule({
  declarations: [
    DepartmentsComponent,
    AllDepartmentsComponent,
    InfoDepartmentComponent
  ],
  imports: [
    CommonModule,
    DepartmentsRoutingModule
  ],
  exports: [
    DepartmentsComponent
  ]
})
export class DepartmentsModule { }
