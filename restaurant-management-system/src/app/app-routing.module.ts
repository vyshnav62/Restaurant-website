import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import components for the user section
import { MenuComponent } from './user/menu/menu.component'; 

const routes: Routes = [
  // User Routes
  { path: '', redirectTo: '/menu', pathMatch: 'full' },  
  { path: 'menu', component: MenuComponent }, 


  { path: '**', redirectTo: '/menu' },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule],  
})
export class AppRoutingModule {}
