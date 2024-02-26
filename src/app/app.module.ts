import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { PagesComponent } from './pages/pages.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './reuse/menu/menu.component';
import { AuthComponent } from './reuse/auth/auth.component';
import { SociallinksComponent } from './reuse/sociallinks/sociallinks.component';
import { PhoneComponent } from './reuse/phone/phone.component';
import { EmailComponent } from './reuse/email/email.component';
import { ButtonsComponent } from './reuse/buttons/buttons.component';
import { TestComponent } from './test/test.component';
import { RatingComponent } from './reuse/rating/rating.component';
import { CardComponent } from './reuse/card/card.component';
import { CourseFooterComponent } from './reuse/card/course-footer/course-footer.component';
import { BlogFooterComponent } from './reuse/card/blog-footer/blog-footer.component';
import { HeroComponent } from './home/hero/hero.component';
import { CoursesComponent } from './home/courses/courses.component';
import { BlogItemsComponent } from './home/blog-items/blog-items.component';
import { HeadingsComponent } from './reuse/headings/headings.component';
import { VideoPopupComponent } from './reuse/video-popup/video-popup.component';
import { HowItWorksComponent } from './home/how-it-works/how-it-works.component';
import { SliderComponent } from './reuse/slider/slider.component';
import { JoinUsComponent } from './home/join-us/join-us.component';
import { AppStoreComponent } from './home/app-store/app-store.component';
import { FeedBackComponent } from './home/feed-back/feed-back.component';
import { FeedbackCardComponent } from './home/feed-back/feedback-card/feedback-card.component';
import { ClientsComponent } from './home/clients/clients.component';
import { FooterComponent } from './reuse/footer/footer.component';
import { SubscribeFormComponent } from './reuse/subscribe-form/subscribe-form.component';
import { Header2Component } from './reuse/header2/header2.component';
import { LoginComponent } from './reuse/login/login.component';
import { RegisterComponent } from './reuse/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllCoursesComponent,
    PagesComponent,
    BlogComponent,
    ContactComponent,
    MenuComponent,
    AuthComponent,
    SociallinksComponent,
    PhoneComponent,
    EmailComponent,
    ButtonsComponent,
    TestComponent,
    RatingComponent,
    CardComponent,
    CourseFooterComponent,
    BlogFooterComponent,
    HeroComponent,
    CoursesComponent,
    BlogItemsComponent,
    HeadingsComponent,
    VideoPopupComponent,
    HowItWorksComponent,
    SliderComponent,
    JoinUsComponent,
    AppStoreComponent,
    FeedBackComponent,
    FeedbackCardComponent,
    ClientsComponent,
    FooterComponent,
    SubscribeFormComponent,
    Header2Component,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
