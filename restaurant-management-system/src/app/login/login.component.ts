import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';
  role = 'user'; // Default role

  constructor(private router: Router) {}

  login() {
    if (this.role === 'admin' && this.username === 'admin' && this.password === 'admin123') {
      localStorage.setItem('role', 'admin');
      this.router.navigate(['/admin']);
    } else if (this.role === 'user') {
      localStorage.setItem('role', 'user');
      this.router.navigate(['/user']);
    } else {
      alert('Invalid credentials');
    }
  }
  
}
