import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    OrderComponent,
    ContactComponent,
    AboutusComponent,
    NavbarComponent,
  ],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
