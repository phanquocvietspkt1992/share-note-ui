import { Routes } from '@angular/router';
import { AddNoteComponent } from './add-note/add-note.component';
import { SearchComponent } from './search/search.component';

export const appRoutes: Routes = [
    { path: '', component: AddNoteComponent }, // Default route
    { path: 'add-note', component: AddNoteComponent }, // Add this route
    // { path: '**', redirectTo: '' }, // Wildcard route for unknown paths
];
