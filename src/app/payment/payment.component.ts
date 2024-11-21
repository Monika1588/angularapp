import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  studentName: string = '';
  selectedCourse: string = '';
  paymentMethod: string = '';
  paymentAmount: number = 0;
  
  // Example course list
  courses = [
    { name: 'Math', price: 100 },
    { name: 'Science', price: 120 },
    { name: 'English', price: 80 },
    { name: 'History', price: 90 },
    { name: 'Geography', price: 110 }
  ];

  payments = [
    { name: 'John Doe', amount: 100, course: 'Math', date: '2024-01-01' },
  ];

  makePayment() {
    const paymentDate = new Date().toLocaleDateString();
    this.payments.push({ 
      name: this.studentName,
      course: this.selectedCourse,
      amount: this.paymentAmount, 
      date: paymentDate 
    });

    // Reset form fields after payment
    this.studentName = '';
    this.selectedCourse = '';
    this.paymentMethod = '';
    this.paymentAmount = 0;

    alert(`Payment of ${this.paymentAmount} has been made successfully for ${this.selectedCourse} by ${this.studentName}!`);
  }
}
