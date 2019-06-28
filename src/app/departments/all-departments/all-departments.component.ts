import {Component, OnInit} from '@angular/core';
import {API_Response} from '../../interfaces/API_Response';
import {DepartmentService} from '../../services/department.service';
import {Department} from '../../interfaces/department';
import {Router} from '@angular/router';

@Component({
  selector: 'app-all-departments',
  templateUrl: './all-departments.component.html',
  styleUrls: ['./all-departments.component.css']
})
export class AllDepartmentsComponent implements OnInit {

  constructor(
    private departmentService: DepartmentService,
    private router: Router
  ) {
  }

  departments;

  ngOnInit() {
    this.showAllDepartments();
  }

  showAllDepartments() {
    this.departmentService.findAllDepartments().subscribe((data: API_Response) => {
      this.departments = data.msg;
    });
  }

  departmentInfo(id) {
    this.router.navigate(['department', `${id}`]);
  }
}
