import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { SearchComponent } from '../app/search/search.component'; // Import SearchComponent
import { AddNoteComponent } from './add-note/add-note.component';  // Import the standalone AddNoteComponent

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-search></app-search> <!-- Enables routing here -->
  `,
  imports: [RouterModule, SearchComponent], // Import RouterModule
})
export class AppComponent { }
