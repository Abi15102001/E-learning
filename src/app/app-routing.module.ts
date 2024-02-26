import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { PagesComponent } from './pages/pages.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './reuse/login/login.component';
import { RegisterComponent } from './reuse/register/register.component';

const routes: Routes = [{ path: '', component: HomeComponent }, { path: 'contact', component: ContactComponent },
{ path: 'blog', component: BlogComponent }, { path: 'pages', component: PagesComponent }, { path: 'all-courses', component: AllCoursesComponent }, { path: 'test', component: TestComponent },
{path:'login',component:LoginComponent},{path:'register',component:RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
