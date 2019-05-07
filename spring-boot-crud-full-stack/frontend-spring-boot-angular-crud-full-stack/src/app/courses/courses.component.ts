import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseService } from '../service/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses = [];
  name = 'in28minutes';

  constructor(private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService) { }

  ngOnInit() {
    this.retrieveCourses();
  }

  retrieveCourses() {
    this.courseService.retrieveAllCourses(this.name).subscribe(courses => {
      this.courses = courses;
    });
  }

  addCourse() {
    this.router.navigate([`/course/-1`]);
  }

  updateCourse(id) {
    this.router.navigate([`/course/${id}`]);
  }

  deleteCourse(id) {
    this.courseService.deleteCourse(this.name, id).subscribe(() => {
      this.retrieveCourses();
    });
  }

}
