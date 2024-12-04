import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: any): boolean {
    const role = localStorage.getItem('role'); // Store role in localStorage after login
    const expectedRole = route.data.role;

    if (role === expectedRole) {
      return true;
    }

    this.router.navigate(['/login']); // Redirect to login if unauthorized
    return false;
  }
}
