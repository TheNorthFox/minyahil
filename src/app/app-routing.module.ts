import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'app', component: AppComponent},
  {path: 'resume', component: ResumeComponent},
  { path: '',   redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
