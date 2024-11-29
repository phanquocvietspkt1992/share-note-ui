

import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, Route } from '@angular/router';
import { AppComponent } from './app/app.component';
import { SearchComponent } from './app/search/search.component';
import { AddNoteComponent } from './app/add-note/add-note.component';

const routes: Route[] = [
  { path: '', component: SearchComponent },
  { path: 'add-note', component: AddNoteComponent }, // Route for AddNoteComponent
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),  // Provide routing
    provideHttpClient(),    // Provide HttpClient
  ],
}).catch((err) => console.error(err));
