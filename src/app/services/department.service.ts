import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_Response} from '../interfaces/API_Response';
import {Hosts} from '../enums/hosts';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }


  findAllDepartments(): Observable<API_Response> {
    return this.http.get<API_Response>(`${Hosts.API_HOST}/department`);
  }


}
