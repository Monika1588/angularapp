// src/app/discussion-forum/discussion-forum.component.ts
import { Component } from '@angular/core';

interface Post {
  title: string;
  content: string;
  author: string;
  timestamp: Date;
}

@Component({
  selector: 'app-discussion-forum',
  templateUrl: './discussion-forum.component.html',
  styleUrls: ['./discussion-forum.component.css']
})
export class DiscussionForumComponent {
  posts: Post[] = [];
  newPostTitle: string = '';
  newPostContent: string = '';
  currentUser: string = 'Student'; // Simulating logged-in user

  addPost() {
    if (this.newPostTitle.trim() && this.newPostContent.trim()) {
      this.posts.push({
        title: this.newPostTitle,
        content: this.newPostContent,
        author: this.currentUser,
        timestamp: new Date()
      });
      this.newPostTitle = '';
      this.newPostContent = '';
    }
  }
}
