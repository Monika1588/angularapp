import { Component } from '@angular/core';

@Component({
  selector: 'app-liveclass',
  templateUrl: './liveclass.component.html',
  styleUrls: ['./liveclass.component.css']
})
export class LiveclassComponent {
  videos = [
    { subject: 'Math', duration: 30, description: 'Learn advanced algebra concepts.', url: 'math-video.mp4', isLive: true },
    { subject: 'Science', duration: 45, description: 'Exploring the world of physics.', url: 'science-video.mp4', isLive: false },
    // Add more video objects as needed
  ];

  courses = [
    { name: 'Math', syllabus: 'Algebra, Geometry', price: 100 },
    { name: 'Science', syllabus: 'Physics, Chemistry', price: 120 },
    { name: 'English', syllabus: 'Grammar, Literature', price: 80 },
    { name: 'History', syllabus: 'World History, Ancient Civilizations', price: 90 },
    { name: 'Geography', syllabus: 'Physical Geography, Human Geography', price: 110 },
  ];

  selectedVideo: any; // Variable to hold the currently selected video

  selectVideo(course: any) {
    // Logic to select a video based on the course
    const video = this.videos.find(v => v.subject === course.name);
    if (video) {
      this.selectedVideo = video; // Set the selected video
    }
  }

  watchLater(course: any) {
    alert(`You have added ${course.name} to your Watch Later list.`);
  }
}
