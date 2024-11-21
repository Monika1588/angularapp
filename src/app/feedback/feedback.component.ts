import { Component } from '@angular/core';

interface Feedback {
  name: string;
  message: string;
}

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  feedbacks: Feedback[] = [];
  name: string = '';
  message: string = '';

  submitFeedback() {
    if (this.name && this.message) {
      this.feedbacks.push({ name: this.name, message: this.message });
      this.name = '';
      this.message = '';
    } else {
      alert('Please fill in all fields.');
    }
  }
}
