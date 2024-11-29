import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Welcome to the Search App</h1>
    <router-outlet></router-outlet> <!-- Enables routing here -->
  `,
  imports: [RouterModule], // Import RouterModule
})
export class AppComponent {}
