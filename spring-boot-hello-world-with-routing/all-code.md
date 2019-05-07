<!---
Current Directory : /in28Minutes/git/spring-boot-angular-fullstack-examples/spring-boot-hello-world-with-routing
-->

## Complete Code Example


### /backend-spring-boot-hello-world-with-routing/pom.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>
	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>2.1.3.RELEASE</version>
		<relativePath /> <!-- lookup parent from repository -->
	</parent>
	<groupId>com.in28minutes.fullstack.springboot.react.helloworld</groupId>
	<artifactId>spring-boot-fullstack-hello-world-with-routing</artifactId>
	<version>0.0.1-SNAPSHOT</version>
	<name>spring-boot-fullstack-hello-world-with-routing</name>
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

### /backend-spring-boot-hello-world-with-routing/src/main/resources/application.properties

```properties

```
---

### /backend-spring-boot-hello-world-with-routing/src/main/java/com/in28minutes/fullstack/springboot/helloworld/springboothelloworldwithrouting/helloworld/HelloWorldController.java

```java
package com.in28minutes.fullstack.springboot.helloworld.springboothelloworldwithrouting.helloworld;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

//Controller
@RestController
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200", "http://localhost:8081" })
//
public class HelloWorldController {

	@GetMapping(path = "/hello-world")
	public String helloWorld() {
		return "Hello World";
	}

	@GetMapping(path = "/hello-world-bean")
	public HelloWorldBean helloWorldBean() {
		return new HelloWorldBean("Hello World From a Java Bean");
	}
	
	///hello-world/path-variable/in28minutes
	@GetMapping(path = "/hello-world/path-variable/{name}")
	public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
		//throw new RuntimeException("Something went wrong");
		return new HelloWorldBean(String.format("Hello World, %s", name));
	}
}
```
---

### /backend-spring-boot-hello-world-with-routing/src/main/java/com/in28minutes/fullstack/springboot/helloworld/springboothelloworldwithrouting/helloworld/HelloWorldBean.java

```java
package com.in28minutes.fullstack.springboot.helloworld.springboothelloworldwithrouting.helloworld;
public class HelloWorldBean {

	private String message;

	public HelloWorldBean(String message) {
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return String.format("HelloWorldBean [message=%s]", message);
	}

}
```
---

### /backend-spring-boot-hello-world-with-routing/src/main/java/com/in28minutes/fullstack/springboot/helloworld/springboothelloworldwithrouting/SpringBootFullStackHelloWorldWithRoutingApplication.java

```java
package com.in28minutes.fullstack.springboot.helloworld.springboothelloworldwithrouting;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringBootFullStackHelloWorldWithRoutingApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootFullStackHelloWorldWithRoutingApplication.class, args);
	}

}
```
---

### /frontend-spring-boot-angular-hello-world-with-routing/src/browserslist

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

### /frontend-spring-boot-angular-hello-world-with-routing/src/index.html

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>FrontendSpringBootAngularHelloWorldWithRouting</title>
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

### /frontend-spring-boot-angular-hello-world-with-routing/src/app/app.component.html

```html
<app-menu></app-menu>
<router-outlet></router-outlet>
```
---

### /frontend-spring-boot-angular-hello-world-with-routing/src/app/app-routing.module.ts

```
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloWorldStringComponent } from './hello-world-string/hello-world-string.component';
import { HelloWorldBeanComponent } from './hello-world-bean/hello-world-bean.component';

const routes: Routes = [
  {path: '', component: HelloWorldStringComponent},
  {path: 'hello-world-string', component: HelloWorldStringComponent},
  {path: 'hello-world-bean', component: HelloWorldBeanComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```
---

### /frontend-spring-boot-angular-hello-world-with-routing/src/app/hello-world-string/hello-world-string.component.html

```html
<h1>Hello World String Component</h1>
<div class="container">
  {{this.welcomeMessage}}
</div>
<div class="row">
  <button class="btn btn-success" (click)="gotoBeanComponent()">Go</button>
</div>
```
---

### /frontend-spring-boot-angular-hello-world-with-routing/src/app/hello-world-string/hello-world-string.component.css

```css
```
---

### /frontend-spring-boot-angular-hello-world-with-routing/src/app/hello-world-string/hello-world-string.component.ts

```
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HelloWorldService } from '../service/hello-world.service';

@Component({
  selector: 'app-hello-world-string',
  templateUrl: './hello-world-string.component.html',
  styleUrls: ['./hello-world-string.component.css']
})
export class HelloWorldStringComponent implements OnInit {

  welcomeMessage = '';

  constructor(private route: ActivatedRoute,
    private router: Router, private helloWorldService: HelloWorldService) { }

  ngOnInit() {
    this.helloWorldService.executeHelloWorldService().subscribe((res) => {
      this.welcomeMessage = res;
    });
  }

  gotoBeanComponent() {
    this.router.navigate(['/hello-world-bean']);
  }



}
```
---

### /frontend-spring-boot-angular-hello-world-with-routing/src/app/app.module.ts

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldService } from './service/hello-world.service';
import { MenuComponent } from './menu/menu.component';
import { HelloWorldStringComponent } from './hello-world-string/hello-world-string.component';
import { HelloWorldBeanComponent } from './hello-world-bean/hello-world-bean.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HelloWorldStringComponent,
    HelloWorldBeanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    HelloWorldService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
---

### /frontend-spring-boot-angular-hello-world-with-routing/src/app/app.component.ts

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend-spring-boot-angular-hello-world-with-routing';
}
```
---

### /frontend-spring-boot-angular-hello-world-with-routing/src/app/menu/menu.component.ts

```
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  welcomeMessage = 'Test';

  constructor() { }

  ngOnInit() {

  }

}
```
---

### /frontend-spring-boot-angular-hello-world-with-routing/src/app/menu/menu.component.css

```css
```
---

### /frontend-spring-boot-angular-hello-world-with-routing/src/app/menu/menu.component.html

```html
<header>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <div><a href="http://www.in28minutes.com" class="navbar-brand">in28Minutes</a></div>
      <ul class="navbar-nav">
          <li><a class="nav-link" href="/hello-world-string">Hello World String</a></li>
          <li><a class="nav-link" href="/hello-world-bean">Hello World Bean</a></li>
      </ul>
  </nav>
</header>
```
---

### /frontend-spring-boot-angular-hello-world-with-routing/src/app/model/Message.ts

```
export class MessageModel {
    constructor(public message: string) {

    }
}
```
---

### /frontend-spring-boot-angular-hello-world-with-routing/src/app/app.component.css

```css
@import url(https://unpkg.com/bootstrap@4.1.0/dist/css/bootstrap.min.css)
```
---

### /frontend-spring-boot-angular-hello-world-with-routing/src/app/service/hello-world.service.ts

```
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageModel } from '../model/Message';

@Injectable({
    providedIn: 'root'
})
export class HelloWorldService {
    constructor(private http: HttpClient) {

    }

    executeHelloWorldService() {
        // because a text response was specified.
        // There's no need to pass a <string> type parameter to get().
        return this.http.get('http://localhost:8080/hello-world', { responseType: 'text' });
    }

    executeHelloWorldBeanService() {
        return this.http.get<MessageModel>('http://localhost:8080/hello-world-bean');
    }

    executeHelloWorldPathVariableService(name) {
        return this.http.get(`http://localhost:8080/hello-world/path-variable/${name}`);
    }

}
```
---

### /frontend-spring-boot-angular-hello-world-with-routing/src/app/hello-world-bean/hello-world-bean.component.html

```html
<h1>Hello World String Component</h1>
<div class="container">
  {{this.welcomeMessage}}
</div>
<div class="row">
  <button class="btn btn-success" (click)="gotoStringComponent()" >Go Back</button>
</div>
```
---

### /frontend-spring-boot-angular-hello-world-with-routing/src/app/hello-world-bean/hello-world-bean.component.ts

```
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HelloWorldService } from '../service/hello-world.service';

@Component({
  selector: 'app-hello-world-bean',
  templateUrl: './hello-world-bean.component.html',
  styleUrls: ['./hello-world-bean.component.css']
})
export class HelloWorldBeanComponent implements OnInit {

  welcomeMessage = '';

  constructor(private route: ActivatedRoute,
    private router: Router, private helloWorldService: HelloWorldService) { }

  ngOnInit() {
    this.helloWorldService.executeHelloWorldBeanService().subscribe((res) => {
      this.welcomeMessage = res.message;
    });
  }
  gotoStringComponent() {
    this.router.navigate(['/hello-world-string']);
  }

}
```
---

### /frontend-spring-boot-angular-hello-world-with-routing/src/app/hello-world-bean/hello-world-bean.component.css

```css
```
---

### /frontend-spring-boot-angular-hello-world-with-routing/src/main.ts

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

### /frontend-spring-boot-angular-hello-world-with-routing/src/styles.css

```css
/* You can add global styles to this file, and also import other style files */
```
---

### /frontend-spring-boot-angular-hello-world-with-routing/src/environments/environment.prod.ts

```
export const environment = {
  production: true
};
```
---

### /frontend-spring-boot-angular-hello-world-with-routing/src/environments/environment.ts

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

### /frontend-spring-boot-angular-hello-world-with-routing/src/test.ts

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

### /frontend-spring-boot-angular-hello-world-with-routing/src/karma.conf.js

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
      dir: require('path').join(__dirname, '../coverage/frontend-spring-boot-angular-hello-world-with-routing'),
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

### /frontend-spring-boot-angular-hello-world-with-routing/src/polyfills.ts

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

### /frontend-spring-boot-angular-hello-world-with-routing/angular.json

```json
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "frontend-spring-boot-angular-hello-world-with-routing": {
      "root": "",
      "sourceRoot": "src",
      "projectType": "application",
      "prefix": "app",
      "schematics": {},
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "outputPath": "dist/frontend-spring-boot-angular-hello-world-with-routing",
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
            "browserTarget": "frontend-spring-boot-angular-hello-world-with-routing:build"
          },
          "configurations": {
            "production": {
              "browserTarget": "frontend-spring-boot-angular-hello-world-with-routing:build:production"
            }
          }
        },
        "extract-i18n": {
          "builder": "@angular-devkit/build-angular:extract-i18n",
          "options": {
            "browserTarget": "frontend-spring-boot-angular-hello-world-with-routing:build"
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
    "frontend-spring-boot-angular-hello-world-with-routing-e2e": {
      "root": "e2e/",
      "projectType": "application",
      "prefix": "",
      "architect": {
        "e2e": {
          "builder": "@angular-devkit/build-angular:protractor",
          "options": {
            "protractorConfig": "e2e/protractor.conf.js",
            "devServerTarget": "frontend-spring-boot-angular-hello-world-with-routing:serve"
          },
          "configurations": {
            "production": {
              "devServerTarget": "frontend-spring-boot-angular-hello-world-with-routing:serve:production"
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
  "defaultProject": "frontend-spring-boot-angular-hello-world-with-routing"
}
```
---

### /frontend-spring-boot-angular-hello-world-with-routing/package.json

```json
{
  "name": "frontend-spring-boot-angular-hello-world-with-routing",
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
