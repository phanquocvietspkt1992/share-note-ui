import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route } from '@angular/router';
import { AppComponent } from './app/app.component';
import { SearchComponent } from './app/search/search.component'; // Import SearchComponent

// Define routes
const routes: Route[] = [
  { path: '', component: SearchComponent }, // Default route
  { path: 'search', component: SearchComponent },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)], // Provide the router
}).catch((err) => console.error(err));
