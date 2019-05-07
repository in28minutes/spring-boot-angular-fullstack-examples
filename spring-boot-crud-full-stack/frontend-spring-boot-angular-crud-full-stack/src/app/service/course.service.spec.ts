import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseService } from './course.service';

describe('ServiceComponent', () => {
  let component: CourseService;
  let fixture: ComponentFixture<CourseService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
