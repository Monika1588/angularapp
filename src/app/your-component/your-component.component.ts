import { Component } from '@angular/core';

@Component({
  selector: 'app-your-component',  // Change this if your component has a different name
  templateUrl: './your-component.component.html',
  styleUrls: ['./your-component.component.css']  // Adjust the path if necessary
})
export class YourComponent {
  tests = [
    { subject: 'Math', duration: '1 hour' },
    { subject: 'Science', duration: '1.5 hours' },
    { subject: 'English', duration: '45 minutes' },
    { subject: 'History', duration: '1 hour' },
    { subject: 'Geography', duration: '50 minutes' }
  ];

  assignments = [
    { subject: 'Math', score: 85, dueDate: '2024-10-20' },
    { subject: 'Science', score: 92, dueDate: '2024-10-22' },
    { subject: 'English', score: 78, dueDate: '2024-10-25' },
    { subject: 'History', score: 88, dueDate: '2024-10-18' },
    { subject: 'Geography', score: 90, dueDate: '2024-10-24' }
  ];
}
