import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class Register {

  formData = {
    name: '',
    email: '',
    password: ''
  };

  constructor(private readonly authService: AuthService) {}

  onSubmit() {
    this.authService.register(this.formData).subscribe({
      next: (res) => {
        console.log(res);
        alert('User registered successfully!');
      },
      error: (err) => {
        console.error(err);
        alert('Error registering user');
      }
    });
  }
}
