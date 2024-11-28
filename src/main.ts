import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route } from '@angular/router';
import { SearchComponent } from './app/search/search.component';

const routes: Route[] = [
  { path: '', component: SearchComponent }, // Root path shows SearchComponent
];

bootstrapApplication(SearchComponent, {
  providers: [provideRouter(routes)],
}).catch((err) => console.error(err));
