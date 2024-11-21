// src/app/events-announcements/events-announcements.component.ts
import { Component } from '@angular/core';

interface Event {
  title: string;
  date: string;
  description: string;
  details: string;
}

interface Announcement {
  title: string;
  date: string;
  content: string;
  details: string;
}

@Component({
  selector: 'app-events-announcements',
  templateUrl: './events-announcements.component.html',
  styleUrls: ['./events-announcements.component.css']
})
export class EventsAnnouncementsComponent {
  events: Event[] = [
    { title: 'Workshop on Angular', date: '2024-11-01', description: 'A hands-on workshop to learn Angular basics.', details: 'Join us for a comprehensive workshop where you will learn about components, services, and more!' },
    { title: 'Seminar on Web Development', date: '2024-11-15', description: 'Insights from industry experts on modern web development.', details: 'A panel discussion featuring leading web developers discussing trends and best practices.' },
  ];

  announcements: Announcement[] = [
    { title: 'New Course Launch', date: '2024-10-20', content: 'We are excited to announce the launch of our new course on Data Science!', details: 'Enroll now to secure your spot and start learning about data analysis, machine learning, and more!' },
    { title: 'Holiday Break', date: '2024-12-20', content: 'The academy will be closed for the holiday break from December 20 to January 5.', details: 'Enjoy your holidays! Classes will resume on January 6.' },
  ];

  selectedEventIndex: number | null = null;
  selectedAnnouncementIndex: number | null = null;

  toggleEvent(index: number) {
    this.selectedEventIndex = this.selectedEventIndex === index ? null : index;
  }

  toggleAnnouncement(index: number) {
    this.selectedAnnouncementIndex = this.selectedAnnouncementIndex === index ? null : index;
  }
}
