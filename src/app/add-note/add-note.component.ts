import { Component, inject } from '@angular/core';
import { ApiService } from '../api.service';  // Import ApiService to handle HTTP requests
import { FormsModule } from '@angular/forms';  // Import FormsModule for ngModel
import { CommonModule } from '@angular/common';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Note } from '../note';



@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css'],
  standalone: true,  // Mark the component as standalone
  imports: [FormsModule, CommonModule],  // Import necessary modules for form handling and HTTP requests
})
export class AddNoteComponent {

  constructor(private apiService: ApiService) { }

  // Declare the note variable
  note: Note = {
    id: '',         // Default value for id
    uuid: '',       // Default value for uuid
    key: '',        // Default value for key
    description: '',// Default value for description
    url: '',         // Default value for url
  };

  message: string = '';

  // Method to handle form submission
  onSubmit() {
    debugger;
    // Call the ApiService to add the note
    this.apiService.addNote(this.note).subscribe(
      response => {
        // Show success message if the note is added successfully
        this.message = 'Note added successfully!';
        console.log('Response:', response);
        this.resetForm();  // Optionally reset the form
      },
      error => {
        // Show error message if there is an error
        this.message = 'Error adding note. Please try again!';
        console.error('Error:', error);
      }
    );
  }

  // Optionally reset the form after successful submission
  resetForm() {
    this.note = {
      id: '',              // Reset to a default ID (or null if not required)
      uuid: '',              // Reset to a default ID (or null if not required)
      key: '',          // Reset the title to an empty string
      description: '',        // Reset content to an empty string
      url: '' // Reset to current date or null if not required
    };
  }
}
