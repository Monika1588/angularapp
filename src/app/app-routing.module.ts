import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { CoursesComponent } from './courses/courses.component';
import { LiveclassComponent } from './liveclass/liveclass.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { PaymentComponent } from './payment/payment.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ScholarshipComponent } from './scholarship/scholarship.component';
import { LoginComponent } from './login/login.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { BookListComponent } from './book-list/book-list.component';
import { EventsAnnouncementsComponent } from './events-announcements/events-announcements.component';
import { DiscussionForumComponent } from './discussion-forum/discussion-forum.component';
import { MessagingComponent } from './messaging/messaging.component';
import { DoubtSectionComponent } from './doubt-section/doubt-section.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'liveclass', component: LiveclassComponent },
  { path: 'assignment', component: AssignmentComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'scholarship', component: ScholarshipComponent},
  { path: 'login', component: LoginComponent},
  { path: 'feedback', component: FeedbackComponent},
  { path: 'book-link', component: BookListComponent},
  { path: 'events-announcements', component: EventsAnnouncementsComponent},
  { path: 'discussion-forum', component: DiscussionForumComponent},
  { path: 'messaging', component: MessagingComponent},
  { path: 'doubt-section', component: DoubtSectionComponent},
  { path: '', redirectTo: '/register', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
