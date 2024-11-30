import { Component, inject } from '@angular/core';
import { ApiService } from '../api.service';  // Import ApiService to handle HTTP requests
import { FormsModule } from '@angular/forms';  // Import FormsModule for ngModel
import { CommonModule } from '@angular/common';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';


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
  // The note object to store user input
  note = { key: '', url: '', description: '' };
  message: string = '';

  constructor(private apiService: ApiService) { }

  // Method to handle form submission
  onSubmit() {
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
    this.note = { key: '', url: '', description: '' };
  }
}
