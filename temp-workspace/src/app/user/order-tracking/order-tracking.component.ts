import { Component } from '@angular/core';

@Component({
  selector: 'app-order-tracking',
  templateUrl: './order-tracking.component.html',
  styleUrls: ['./order-tracking.component.css'],
})
export class OrderTrackingComponent {
  order: any = { id: 12345, status: 'In Progress' };

  // Simulate tracking an order
  trackOrder(orderId: number) {
    // Replace with actual logic to fetch order status from API
    console.log('Tracking order:', orderId);
  }
}
