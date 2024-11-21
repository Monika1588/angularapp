import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  gender: string = '';
  termsAccepted: boolean = false;  // Add this property
  fileToUpload: File | null = null;
  isSubmitted: boolean = false;

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.fileToUpload = file;
    }
  }

  onSubmit() {
    if (this.username.length > 5 && this.password.length >= 8 && this.termsAccepted && this.fileToUpload) {
      this.isSubmitted = true;
      console.log('Form Submitted');
      console.log('Username:', this.username);
      console.log('Password:', this.password);
      console.log('Gender:', this.gender);
      console.log('File:', this.fileToUpload.name);
    }
  }
}
