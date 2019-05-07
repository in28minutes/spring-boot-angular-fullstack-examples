import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseService } from './service/course.service';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    CourseService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
