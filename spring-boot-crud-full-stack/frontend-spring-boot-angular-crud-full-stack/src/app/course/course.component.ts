import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseService } from '../service/course.service';
import { Course } from '../model/Course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  id: number;
  errors = [];
  name = 'in28minutes';
  course: Course;


  constructor(private route: ActivatedRoute, private router: Router,
    private courseService: CourseService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.course = new Course(this.id, '');
    if(this.id != -1) {
      this.courseService.retrieveCourse(this.name, this.id).subscribe((course) => {
        this.course = course;
      });
    }
  }

  saveSourse() {
    if(this.id != -1) {
      this.courseService.createCourse(this.name, this.course).subscribe(() => {
        this.router.navigate(['courses']);
      })
    } else {
      this.courseService.updateCourse(this.name, this.id, this.course).subscribe(() => {
        this.router.navigate(['courses']);
      })
    }
  }


}
