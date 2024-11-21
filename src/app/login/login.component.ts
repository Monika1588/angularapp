import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  onSubmit() {
    if (this.username === '' || this.password === '') {
      this.errorMessage = 'Both fields are required.';
      alert(this.errorMessage);
    } else {
      this.errorMessage = '';
      alert(`Logging in with Username: ${this.username} and Password: ${this.password}`);
      console.log('Logging in with', this.username, this.password);
    }
  }
}
