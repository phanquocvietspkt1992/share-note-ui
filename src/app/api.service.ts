import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

interface SearchResult {
  uuid: string;
  key: string;
  url: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:5272/api/Note/search';

  constructor(private http: HttpClient) { }
  // Method to call the search API with the provided key
  // Method to call the search API with the provided key
  searchNotes(query: string): Observable<SearchResult[]> {
    const headers = new HttpHeaders({
      accept: 'application/json',  // Ensure that the server knows we're expecting JSON
    });

    return this.http.get<SearchResult[]>(`${this.apiUrl}?key=${query}`, { headers })
      .pipe(
        catchError((error) => {
          console.error('Error making API call:', error);
          console.error('Error status:', error.status);
          console.error('Error message:', error.message);
          console.error('Error response:', error.error); // Log error response if available
          return throwError(error); // Re-throw the error for the component to handle
        })
      );
  }


  // Method to send POST request to add a new note
  addNote(note: any): Observable<any> {
    const headers = new HttpHeaders({
      'Accept': 'text/plain',
      'Content-Type': 'application/json',
    });

    // Return the HTTP POST request with error handling
    return this.http
      .post<any>("http://localhost:5272/api/Note", note, { headers })
      .pipe(
        tap(response => {
          // Handle successful response (e.g., log it)
          console.log('Note added successfully:', response);
        }),
        catchError((error) => {
          // Handle error (e.g., log it or show a user-friendly message)
          console.error('Error occurred while adding note:', error);
          return throwError(() => new Error('An error occurred while adding the note.'));
        })
      );
  }

}
