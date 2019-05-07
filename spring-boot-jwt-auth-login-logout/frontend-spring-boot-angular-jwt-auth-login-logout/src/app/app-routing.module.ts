import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CoursesComponent } from './courses/courses.component';
import { LogoutComponent } from './logout/logout.component'; 
import { AuthGuardService} from './service/auth-guard.service';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'courses', component: CoursesComponent, canActivate: [AuthGuardService]},
  {path: 'logout', component: LogoutComponent,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
