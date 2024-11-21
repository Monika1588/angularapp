// src/app/doubt-section/doubt-section.component.ts
import { Component } from '@angular/core';

interface Doubt {
  question: string;
}

@Component({
  selector: 'app-doubt-section',
  templateUrl: './doubt-section.component.html',
  styleUrls: ['./doubt-section.component.css']
})
export class DoubtSectionComponent {
  doubts: Doubt[] = [];
  question: string = '';
  errorMessage: string = '';

  submitDoubt() {
    if (this.question.trim()) {
      this.doubts.push({ question: this.question });
      this.question = ''; // Clear the input field after submission
      this.errorMessage = ''; // Clear error message
    } else {
      this.errorMessage = 'Please enter a question before submitting.';
    }
  }
}
