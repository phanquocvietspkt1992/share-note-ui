import { Component } from '@angular/core';

import { SearchComponent } from '../app/search/search.component'; // Import SearchComponent
import { AddNoteComponent } from './add-note/add-note.component';  // Import the standalone AddNoteComponent
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, AddNoteComponent, SearchComponent],
})
export class AppComponent {

  title = 'routing-app';
}
