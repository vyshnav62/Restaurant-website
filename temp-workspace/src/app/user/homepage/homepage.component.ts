import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  categories = [
    { id: 1, name: 'Starters', description: 'Delicious appetizers to start your meal.' },
    { id: 2, name: 'Main Course', description: 'Hearty and filling main dishes.' },
    { id: 3, name: 'Desserts', description: 'Sweet treats to finish your meal.' },
  ];

  constructor(private router: Router) {}

  navigateToCategory(categoryId: number) {
    this.router.navigate(['/user/menu'], { queryParams: { category: categoryId } });
  }
}
