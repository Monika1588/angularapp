// src/app/messaging/messaging.component.ts
import { Component } from '@angular/core';

interface Message {
  sender: string;
  content: string;
  timestamp: Date;
}

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})
export class MessagingComponent {
  messages: Message[] = [];
  newMessage: string = '';
  currentUser: string = 'Student'; // Simulating logged-in user

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({
        sender: this.currentUser,
        content: this.newMessage,
        timestamp: new Date()
      });
      this.newMessage = ''; // Clear input
    }
  }
}
