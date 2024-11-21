import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // <-- Import FormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { CoursesComponent } from './courses/courses.component';
import { LiveclassComponent } from './liveclass/liveclass.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { PaymentComponent } from './payment/payment.component';
import { YourComponent } from './your-component/your-component.component';
import { ScholarshipComponent } from './scholarship/scholarship.component';
import { LoginComponent } from './login/login.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { BookListComponent } from './book-list/book-list.component';
import { EventsAnnouncementsComponent } from './events-announcements/events-announcements.component';
import { MessagingComponent } from './messaging/messaging.component';
import { DiscussionForumComponent } from './discussion-forum/discussion-forum.component';
import { DoubtSectionComponent } from './doubt-section/doubt-section.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    CoursesComponent,
    LiveclassComponent,
    AssignmentComponent,
    PaymentComponent,
    YourComponent,
    ScholarshipComponent,
    LoginComponent,
    FeedbackComponent,
    BookListComponent,
    EventsAnnouncementsComponent,
    MessagingComponent,
    DiscussionForumComponent,
    DoubtSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule  // <-- Add FormsModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
