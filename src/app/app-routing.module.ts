import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectComponent } from './project/project.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'app', component: AppComponent},
  {path: 'project', component: ProjectComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'about', component: AboutComponent},
  { path: '',   redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
