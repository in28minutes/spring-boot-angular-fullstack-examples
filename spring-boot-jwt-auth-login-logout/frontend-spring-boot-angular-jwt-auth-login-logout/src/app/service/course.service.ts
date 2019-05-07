import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  // BASE_PATH: 'http://localhost:8080';

  constructor(private http: HttpClient) {

  }

  retrieveAllCourses(name) {
    return this.http.get<[]>(`http://localhost:8080/instructors/${name}/courses`);
  }

}
