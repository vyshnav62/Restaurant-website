import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';  // Import routing module
import { AppComponent } from './app.component';

// Import the components (in this case, MenuComponent)
import { MenuComponent } from './user/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
  ],
  providers: [],
  bootstrap: [AppComponent],  
})
export class AppModule {}
