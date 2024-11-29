import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs'

interface SearchResult {
  id: number;
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

    return this.http.post<any>(this.apiUrl, note, { headers });
  }

}
