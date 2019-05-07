import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { CourseService } from '../service/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses = [];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private courseService: CourseService) { }

  ngOnInit() {
    this.courseService.retrieveAllCourses(this.authenticationService.username).subscribe(courses => {
      this.courses = courses;
    });
  }

}
