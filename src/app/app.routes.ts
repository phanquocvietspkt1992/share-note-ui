import { Routes } from '@angular/router';
import { AddNoteComponent } from './add-note/add-note.component';
import { SearchComponent } from './search/search.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: '', component: SearchComponent },
    { path: 'search', component: SearchComponent }, // Default route
    { path: 'add-note', component: AddNoteComponent }, // Add this route
    // { path: '**', redirectTo: '' }, // Wildcard route for unknown paths
];
