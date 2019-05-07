<!---
Current Directory : /in28Minutes/git/spring-boot-angular-fullstack-examples/spring-boot-crud-full-stack
-->

## Complete Code Example


### /frontend-spring-boot-angular-crud-full-stack/src/browserslist

```
# This file is currently used by autoprefixer to adjust CSS to support the below specified browsers
# For additional information regarding the format and rule options, please see:
# https://github.com/browserslist/browserslist#queries
#
# For IE 9-11 support, please remove 'not' from the last line of the file and adjust as needed

> 0.5%
last 2 versions
Firefox ESR
not dead
not IE 9-11
```
---

### /frontend-spring-boot-angular-crud-full-stack/src/index.html

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>FrontendAngularBasicAuthLoginLogout</title>
  <base href="/">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>
```
---

### /frontend-spring-boot-angular-crud-full-stack/src/app/app.component.html

```html
<router-outlet></router-outlet>
```
---

### /frontend-spring-boot-angular-crud-full-stack/src/app/app-routing.module.ts

```
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';

const routes: Routes = [
  {path: '', component: CoursesComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'course/:id', component: CourseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```
---

### /frontend-spring-boot-angular-crud-full-stack/src/app/course/course.component.ts

```
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
```
---

### /frontend-spring-boot-angular-crud-full-stack/src/app/course/course.component.html

```html
<h3>Course</h3>
<div class="container">
  <form (ngSubmit)="!courseForm.invalid && saveSourse()" #courseForm="ngForm">
    <div>
      <div class="alert alert-warning" *ngIf="courseForm.dirty && courseForm.invalid">Enter valid values</div>
      <div class="alert alert-warning" *ngIf="courseForm.dirty && description.invalid">Enter atleast 5 characters in
        Description</div>
    </div>
    <fieldset class="form-group">
      <label>Id</label>
      <input type="text" class="form-control" #id="ngModel" [(ngModel)]="course.id" name="id">
    </fieldset>
    <fieldset class="form-group">
      <label>Description</label>
      <input type="text" #description="ngModel" [(ngModel)]="course.description" class="form-control" name="description"
        required="required" minlength="5">
    </fieldset>
    <button class="btn btn-success" type="submit">Save</button>
  </form>
</div>
```
---

### /frontend-spring-boot-angular-crud-full-stack/src/app/course/course.component.css

```css
```
---

### /frontend-spring-boot-angular-crud-full-stack/src/app/app.module.ts

```
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
```
---

### /frontend-spring-boot-angular-crud-full-stack/src/app/app.component.ts

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spring boot full stack';
}
```
---

### /frontend-spring-boot-angular-crud-full-stack/src/app/courses/courses.component.css

```css
```
---

### /frontend-spring-boot-angular-crud-full-stack/src/app/courses/courses.component.ts

```
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
```
---

### /frontend-spring-boot-angular-crud-full-stack/src/app/courses/courses.component.html

```html
<div class="container">
  <h3>All Courses</h3>
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Description</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let course of courses">
          <td>{{course.id}}</td>
          <td>{{course.description}}</td>
          <td><button class="btn btn-success" (click)="updateCourse(course.id)">Update</button></td>
          <td><button class="btn btn-warning" (click)="deleteCourse(course.id)">Delete</button></td>
        </tr>

      </tbody>
    </table>
    <div class="row">
      <button class="btn btn-success" (click)="addCourse()">Add</button>
    </div>
  </div>
</div>
```
---

### /frontend-spring-boot-angular-crud-full-stack/src/app/model/Course.ts

```
export class Course {
  constructor(
    public id: number,
    public description: string,
  ) {

  }
}
```
---

### /frontend-spring-boot-angular-crud-full-stack/src/app/app.component.css

```css
@import url(https://unpkg.com/bootstrap@4.1.0/dist/css/bootstrap.min.css)
```
---

### /frontend-spring-boot-angular-crud-full-stack/src/app/service/course.service.ts

```
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../model/Course';


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) {

  }

  // eslint-disable-next-line
  retrieveAllCourses(name) {
    //console.log('executed service')
    return this.http.get<[]>(`http://localhost:8080/instructors/${name}/courses`);
  }

  // eslint-disable-next-line
  retrieveCourse(name, id) {
    //console.log('executed service')
    return this.http.get<Course>(`http://localhost:8080/instructors/${name}/courses/${id}`);
  }

  // eslint-disable-next-line
  deleteCourse(name, id) {
    //console.log('executed service')
    return this.http.delete<Object>(`http://localhost:8080/instructors/${name}/courses/${id}`);
  }

  // eslint-disable-next-line
  updateCourse(name, id, course) {
    //console.log('executed service')
    return this.http.put<Object>(`http://localhost:8080/instructors/${name}/courses/${id}`, course);
  }

  // eslint-disable-next-line
  createCourse(name, course) {
    //console.log('executed service')
    return this.http.post<Object>(`http://localhost:8080/instructors/${name}/courses/`, course);
  }

}
```
---

### /frontend-spring-boot-angular-crud-full-stack/src/main.ts

```
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
```
---

### /frontend-spring-boot-angular-crud-full-stack/src/styles.css

```css
/* You can add global styles to this file, and also import other style files */
```
---

### /frontend-spring-boot-angular-crud-full-stack/src/environments/environment.prod.ts

```
export const environment = {
  production: true
};
```
---

### /frontend-spring-boot-angular-crud-full-stack/src/environments/environment.ts

```
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
```
---

### /frontend-spring-boot-angular-crud-full-stack/src/test.ts

```
// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
```
---

### /frontend-spring-boot-angular-crud-full-stack/src/karma.conf.js

```js
// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../coverage/frontend-angular-basic-auth-login-logout'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true
  });
};
```
---

### /frontend-spring-boot-angular-crud-full-stack/src/polyfills.ts

```
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/guide/browser-support
 */

/***************************************************************************************************
 * BROWSER POLYFILLS
 */

/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.

/**
 * Web Animations `@angular/platform-browser/animations`
 * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
 * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
 */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.

/**
 * By default, zone.js will patch all possible macroTask and DomEvents
 * user can disable parts of macroTask/DomEvents patch by setting following flags
 * because those flags need to be set before `zone.js` being loaded, and webpack
 * will put import in the top of bundle, so user need to create a separate file
 * in this directory (for example: zone-flags.ts), and put the following flags
 * into that file, and then add the following code before importing zone.js.
 * import './zone-flags.ts';
 *
 * The flags allowed in zone-flags.ts are listed here.
 *
 * The following flags will work for all browsers.
 *
 * (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
 * (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
 * (window as any).__zone_symbol__BLACK_LISTED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
 *
 *  in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
 *  with the following flag, it will bypass `zone.js` patch for IE/Edge
 *
 *  (window as any).__Zone_enable_cross_context_check = true;
 *
 */

/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
import 'zone.js/dist/zone';  // Included with Angular CLI.


/***************************************************************************************************
 * APPLICATION IMPORTS
 */
```
---

### /frontend-spring-boot-angular-crud-full-stack/angular.json

```json
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "frontend-angular-basic-auth-login-logout": {
      "root": "",
      "sourceRoot": "src",
      "projectType": "application",
      "prefix": "app",
      "schematics": {},
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "outputPath": "dist/frontend-angular-basic-auth-login-logout",
            "index": "src/index.html",
            "main": "src/main.ts",
            "polyfills": "src/polyfills.ts",
            "tsConfig": "src/tsconfig.app.json",
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.css"
            ],
            "scripts": [],
            "es5BrowserSupport": true
          },
          "configurations": {
            "production": {
              "fileReplacements": [
                {
                  "replace": "src/environments/environment.ts",
                  "with": "src/environments/environment.prod.ts"
                }
              ],
              "optimization": true,
              "outputHashing": "all",
              "sourceMap": false,
              "extractCss": true,
              "namedChunks": false,
              "aot": true,
              "extractLicenses": true,
              "vendorChunk": false,
              "buildOptimizer": true,
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "2mb",
                  "maximumError": "5mb"
                }
              ]
            }
          }
        },
        "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "options": {
            "browserTarget": "frontend-angular-basic-auth-login-logout:build"
          },
          "configurations": {
            "production": {
              "browserTarget": "frontend-angular-basic-auth-login-logout:build:production"
            }
          }
        },
        "extract-i18n": {
          "builder": "@angular-devkit/build-angular:extract-i18n",
          "options": {
            "browserTarget": "frontend-angular-basic-auth-login-logout:build"
          }
        },
        "test": {
          "builder": "@angular-devkit/build-angular:karma",
          "options": {
            "main": "src/test.ts",
            "polyfills": "src/polyfills.ts",
            "tsConfig": "src/tsconfig.spec.json",
            "karmaConfig": "src/karma.conf.js",
            "styles": [
              "src/styles.css"
            ],
            "scripts": [],
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ]
          }
        },
        "lint": {
          "builder": "@angular-devkit/build-angular:tslint",
          "options": {
            "tsConfig": [
              "src/tsconfig.app.json",
              "src/tsconfig.spec.json"
            ],
            "exclude": [
              "**/node_modules/**"
            ]
          }
        }
      }
    },
    "frontend-angular-basic-auth-login-logout-e2e": {
      "root": "e2e/",
      "projectType": "application",
      "prefix": "",
      "architect": {
        "e2e": {
          "builder": "@angular-devkit/build-angular:protractor",
          "options": {
            "protractorConfig": "e2e/protractor.conf.js",
            "devServerTarget": "frontend-angular-basic-auth-login-logout:serve"
          },
          "configurations": {
            "production": {
              "devServerTarget": "frontend-angular-basic-auth-login-logout:serve:production"
            }
          }
        },
        "lint": {
          "builder": "@angular-devkit/build-angular:tslint",
          "options": {
            "tsConfig": "e2e/tsconfig.e2e.json",
            "exclude": [
              "**/node_modules/**"
            ]
          }
        }
      }
    }
  },
  "defaultProject": "frontend-angular-basic-auth-login-logout"
}
```
---

### /frontend-spring-boot-angular-crud-full-stack/package.json

```json
{
  "name": "frontend-angular-basic-auth-login-logout",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "~7.2.0",
    "@angular/common": "~7.2.0",
    "@angular/compiler": "~7.2.0",
    "@angular/core": "~7.2.0",
    "@angular/forms": "~7.2.0",
    "@angular/platform-browser": "~7.2.0",
    "@angular/platform-browser-dynamic": "~7.2.0",
    "@angular/router": "~7.2.0",
    "core-js": "^2.5.4",
    "rxjs": "~6.3.3",
    "tslib": "^1.9.0",
    "zone.js": "~0.8.26"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "~0.13.0",
    "@angular/cli": "~7.3.6",
    "@angular/compiler-cli": "~7.2.0",
    "@angular/language-service": "~7.2.0",
    "@types/node": "~8.9.4",
    "@types/jasmine": "~2.8.8",
    "@types/jasminewd2": "~2.0.3",
    "codelyzer": "~4.5.0",
    "jasmine-core": "~2.99.1",
    "jasmine-spec-reporter": "~4.2.1",
    "karma": "~4.0.0",
    "karma-chrome-launcher": "~2.2.0",
    "karma-coverage-istanbul-reporter": "~2.0.1",
    "karma-jasmine": "~1.1.2",
    "karma-jasmine-html-reporter": "^0.2.2",
    "protractor": "~5.4.0",
    "ts-node": "~7.0.0",
    "tslint": "~5.11.0",
    "typescript": "~3.2.2"
  }
}
```
---

### /backend-spring-boot-crud-full-stack/pom.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>
	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>2.1.3.RELEASE</version>
		<relativePath/> <!-- lookup parent from repository -->
	</parent>
	<groupId>com.in28minutes.fullstack.springboot.react.maven.crud</groupId>
	<artifactId>spring-boot-react-crud-full-stack-with-maven</artifactId>
	<version>0.0.1-SNAPSHOT</version>
	<name>spring-boot-react-crud-full-stack-with-maven</name>
	<description>Demo project for Spring Boot</description>

	<properties>
		<java.version>1.8</java.version>
	</properties>

	<dependencies>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
		</dependency>

		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-devtools</artifactId>
			<scope>runtime</scope>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-test</artifactId>
			<scope>test</scope>
		</dependency>
	</dependencies>

	<build>
		<plugins>
			<plugin>
				<groupId>org.springframework.boot</groupId>
				<artifactId>spring-boot-maven-plugin</artifactId>
			</plugin>
		</plugins>
	</build>

</project>
```
---

### /backend-spring-boot-crud-full-stack/src/test/java/com/in28minutes/fullstack/springboot/react/maven/crud/springbootreactcrudfullstackwithmaven/SpringBootReactCrudFullStackWithMavenApplicationTests.java

```java
package com.in28minutes.fullstack.springboot.react.maven.crud.springbootreactcrudfullstackwithmaven;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class SpringBootReactCrudFullStackWithMavenApplicationTests {

	@Test
	public void contextLoads() {
	}

}
```
---

### /backend-spring-boot-crud-full-stack/src/main/resources/application.properties

```properties

```
---

### /backend-spring-boot-crud-full-stack/src/main/java/com/in28minutes/fullstack/springboot/react/maven/crud/springbootreactcrudfullstackwithmaven/SpringBootReactCrudFullStackWithMavenApplication.java

```java
package com.in28minutes.fullstack.springboot.react.maven.crud.springbootreactcrudfullstackwithmaven;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringBootReactCrudFullStackWithMavenApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootReactCrudFullStackWithMavenApplication.class, args);
	}

}
```
---

### /backend-spring-boot-crud-full-stack/src/main/java/com/in28minutes/fullstack/springboot/react/maven/crud/springbootreactcrudfullstackwithmaven/model/Course.java

```java
package com.in28minutes.fullstack.springboot.react.maven.crud.springbootreactcrudfullstackwithmaven.model;

public class Course {
	private Long id;
	private String username;
	private String description;

	public Course() {

	}

	public Course(long id, String username, String description) {
		super();
		this.id = id;
		this.username = username;
		this.description = description;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((description == null) ? 0 : description.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((username == null) ? 0 : username.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Course other = (Course) obj;
		if (description == null) {
			if (other.description != null)
				return false;
		} else if (!description.equals(other.description))
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (username == null) {
			if (other.username != null)
				return false;
		} else if (!username.equals(other.username))
			return false;
		return true;
	}

}
```
---

### /backend-spring-boot-crud-full-stack/src/main/java/com/in28minutes/fullstack/springboot/react/maven/crud/springbootreactcrudfullstackwithmaven/service/CoursesHardcodedService.java

```java
package com.in28minutes.fullstack.springboot.react.maven.crud.springbootreactcrudfullstackwithmaven.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.in28minutes.fullstack.springboot.react.maven.crud.springbootreactcrudfullstackwithmaven.model.Course;

@Service
public class CoursesHardcodedService {

	private static List<Course> courses = new ArrayList<>();
	private static long idCounter = 0;

	static {
		courses.add(new Course(++idCounter, "in28minutes", "Learn Full stack with Spring Boot and Angular"));
		courses.add(new Course(++idCounter, "in28minutes", "Learn Full stack with Spring Boot and React"));
		courses.add(new Course(++idCounter, "in28minutes", "Master Microservices with Spring Boot and Spring Cloud"));
		courses.add(new Course(++idCounter, "in28minutes",
				"Deploy Spring Boot Microservices to Cloud with Docker and Kubernetes"));
	}

	public List<Course> findAll() {
		return courses;
	}

	public Course save(Course course) {
		if (course.getId() == -1 || course.getId() == 0) {
			course.setId(++idCounter);
			courses.add(course);
		} else {
			deleteById(course.getId());
			courses.add(course);
		}
		return course;
	}

	public Course deleteById(long id) {
		Course course = findById(id);

		if (course == null)
			return null;

		if (courses.remove(course)) {
			return course;
		}

		return null;
	}

	public Course findById(long id) {
		for (Course course : courses) {
			if (course.getId() == id) {
				return course;
			}
		}

		return null;
	}
}
```
---

### /backend-spring-boot-crud-full-stack/src/main/java/com/in28minutes/fullstack/springboot/react/maven/crud/springbootreactcrudfullstackwithmaven/resource/CourseResource.java

```java
package com.in28minutes.fullstack.springboot.react.maven.crud.springbootreactcrudfullstackwithmaven.resource;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.in28minutes.fullstack.springboot.react.maven.crud.springbootreactcrudfullstackwithmaven.model.Course;
import com.in28minutes.fullstack.springboot.react.maven.crud.springbootreactcrudfullstackwithmaven.service.CoursesHardcodedService;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200", "http://localhost:8081" })
@RestController
public class CourseResource {

	@Autowired
	private CoursesHardcodedService courseManagementService;

	@GetMapping("/instructors/{username}/courses")
	public List<Course> getAllCourses(@PathVariable String username) {
		return courseManagementService.findAll();
	}

	@GetMapping("/instructors/{username}/courses/{id}")
	public Course getCourse(@PathVariable String username, @PathVariable long id) {
		return courseManagementService.findById(id);
	}

	@DeleteMapping("/instructors/{username}/courses/{id}")
	public ResponseEntity<Void> deleteCourse(@PathVariable String username, @PathVariable long id) {

		Course course = courseManagementService.deleteById(id);

		if (course != null) {
			return ResponseEntity.noContent().build();
		}

		return ResponseEntity.notFound().build();
	}

	@PutMapping("/instructors/{username}/courses/{id}")
	public ResponseEntity<Course> updateCourse(@PathVariable String username, @PathVariable long id,
			@RequestBody Course course) {

		Course courseUpdated = courseManagementService.save(course);

		return new ResponseEntity<Course>(course, HttpStatus.OK);
	}

	@PostMapping("/instructors/{username}/courses")
	public ResponseEntity<Void> createCourse(@PathVariable String username, @RequestBody Course course) {

		Course createdCourse = courseManagementService.save(course);

		// Location
		// Get current resource url
		/// {id}
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdCourse.getId())
				.toUri();

		return ResponseEntity.created(uri).build();
	}

}
```
---
