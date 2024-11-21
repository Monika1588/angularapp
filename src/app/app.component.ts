import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchTerm: string = '';

  search() {
    // Implement your search logic here, such as filtering courses or navigating to a search results page
    console.log(`Searching for: ${this.searchTerm}`);
  }

  username: string = '';
  password: string = '';
  gender: string = '';
  termsAccepted: boolean = false;
  isSubmitted: boolean = false;
  selectedFile: File | null = null;

  onSubmit() {
    if (this.username.length >= 5 && this.password.length >= 8 && this.termsAccepted) {
      this.isSubmitted = true;
      console.log('Registration successful');
    }
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    console.log('Selected file:', this.selectedFile);
  }
}
