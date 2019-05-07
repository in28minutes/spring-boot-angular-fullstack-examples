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
